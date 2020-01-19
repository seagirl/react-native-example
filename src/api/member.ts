import { Member } from '../entity/member'

export class MemberAPI {
  static baseURL = 'https://working.s2f.dev/api/members'

  static async getList (): Promise<Member[]> {
    const res = await fetch(this.baseURL)
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

  static async getDetail (name: string): Promise<Member> {
    const res = await fetch(this.baseURL + '/' + name)
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

  static async changeStatus (member: Member): Promise<Member> {
    const newStatus = member.status ? 0 : 1
    const res = await fetch(this.baseURL + '/' + member.name + '/state?state=' + newStatus, {
      method: 'POST'
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

  static async changeColor (member: Member, colorId: number): Promise<Member> {
    const res = await fetch(this.baseURL + '/' + member.name + '/color?colorId=' + colorId, {
      method: 'POST'
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