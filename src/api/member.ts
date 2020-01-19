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
}