export interface MemberList {
  name: string;
  status: boolean;
  color: string;
}

export interface MemberDetail {
  name: string;
  status: boolean;
  color: string;
  online: string | undefined;
  offline: string | undefined;
}