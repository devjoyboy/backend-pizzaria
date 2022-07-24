import prismaClient from "../../prisma"

interface permissionRequest{
    name: string
    description: string
}

class CreatePermissionService{
    async execute({ name, description }: permissionRequest){

        const permission = await prismaClient.permission.create({
            data: {
                name: name,
                description: description
            }
        })

        return permission

    }
}

export { CreatePermissionService }