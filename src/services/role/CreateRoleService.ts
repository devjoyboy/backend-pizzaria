import prismaClient from "../../prisma"

interface RoleRequest {
    name: string
    description: string
    permission_id: string
}

class CreateRoleService {
    async execute({ name, description, permission_id }: RoleRequest) {

        const role = await prismaClient.role.create({
            data:{
                name: name,
                description: description,
                permission_id: permission_id
            }
        })

        return role
    }
}

export { CreateRoleService }