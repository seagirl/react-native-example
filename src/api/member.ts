export interface MemberList {
  name: string;
  status: boolean;
  color: string;
}

export interface MemberDetail {
  name: string;
  status: boolean;
  color: string;
  online: string;
  offline?: string;
}

export class MemberAPI {
  static baseURL = 'https://working.s2f.dev/api/members'

  static async getList(): Promise<MemberList> {
    const res = await fetch(this.baseURL)
    const json = await res.json()
    return json.members
      .sort((a, b) => {
        if (b.state === a.state) {
          return 1
        }
        return b.state > a.state
      })
      .map((member): MemberList => {
        const color = member.color.replace('0x', '#')
        return {
          name: member.name,
          status: member.state === 1,
          color: color
        }
      })
  }

  static async getDetail(name: string): Promise<MemberDetail> {
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