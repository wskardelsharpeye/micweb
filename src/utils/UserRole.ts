export namespace UserRole {
    export enum Role {
        EMPLOYER,
        ASSISTANT,
        CANDIDATE,
        NEWCOMER
    }
    export function getUserRole(role: Role) {
        switch (role) {
            case Role.EMPLOYER:
                return 'EMPLOYER';
            case Role.ASSISTANT:
                return 'ASSISTANT';
            case Role.CANDIDATE:
                return 'CANDIDATE';
            case Role.NEWCOMER:
                return 'NEWCOMER';
            
        }
    }
}