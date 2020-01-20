import { Buffer } from 'buffer'
import store from '../store'
import { Member } from '../entity/member'

export class MemberAPI {
  static default = new MemberAPI()

  private baseURL = 'https://working.s2f.dev/api/members'

  private authString (): string | null {
    const state = store.getState()
    const id = state.config.id
    const password = state.config.password

    if (id && password) {
      return `${id}:${password}`
    }

    return null
  }

  private createHeaders (): Headers {
    const authString = this.authString()
    const headers = new Headers()
    if (authString !== null) {
      headers.set('Authorization', 'Basic ' + Buffer.from(authString).toString('base64'))
    }
    return headers
  }

  async getList (): Promise<Member[]> {
    console.log('MemberAPI.getList()')

    const headers = this.createHeaders()
    const res = await fetch(this.baseURL, { method: 'GET', headers: headers })
    const json = await res.json()
    return json.members
      .sort((a, b) => {
        if (b.state === a.state) {
          return 1
        }
        return b.state > a.state
      })
      .map((member): Member => {
        const color = member.color.replace('0x', '#')
        return {
          name: member.name,
          status: member.state === 1,
          color: color,
          online: undefined,
          offline: undefined
        }
      })
  }

  async getDetail (name: string): Promise<Member> {
    const headers = this.createHeaders()
    const res = await fetch(this.baseURL + '/' + name, { method: 'GET', headers: headers })
    const json = await res.json()
    const member = json.member
    const color = member.color.replace('0x', '#')
    return {
      name: member.name,
      status: member.state === 1,
      color: color,
      online: member.online,
      offline: member.offline
    }
  }

  async changeStatus (member: Member): Promise<Member> {
    const headers = this.createHeaders()
    const newStatus = member.status ? 0 : 1
    const res = await fetch(this.baseURL + '/' + member.name + '/state?state=' + newStatus, {
      method: 'POST',
      headers: headers
    })
    const json = await res.json()
    const status = json.status
    return {
      name: member.name,
      status: status === 1,
      color: member.color,
      online: member.online,
      offline: member.offline
    }
  }

  async changeColor (member: Member, colorId: number): Promise<Member> {
    const headers = this.createHeaders()
    const res = await fetch(this.baseURL + '/' + member.name + '/color?colorId=' + colorId, {
      method: 'POST',
      headers: headers
    })
    const json = await res.json()
    const color = json.color
    return {
      name: member.name,
      status: member.status,
      color: color.code,
      online: member.online,
      offline: member.offline
    }
  }
}