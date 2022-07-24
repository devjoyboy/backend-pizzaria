import prismaClient from "../../prisma"

interface UserACLRequest{
    user_id: string
    roles: string[]
    permissions: string[]
}

class CreateUserAcessControlListService{
    async execute({ user_id, roles, permissions }: UserACLRequest){
        const user = await prismaClient.user.findMany({
            where: {
                id: user_id
            }
        })

        if(!user) {
            return new Error('User does not exists!')
        }
    }
}

export { CreateUserAcessControlListService }