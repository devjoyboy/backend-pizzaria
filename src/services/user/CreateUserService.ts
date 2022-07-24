import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    name: string
    email: string
    password: string
    permission_id: string
    role_id: string
}

class CreateUserService{
    async execute({ name, email, password, permission_id, role_id }: UserRequest){

        // verificar se ele enviou um email
        if(!email){
            throw new Error("Email incorrect")
        }

        // verificar se esse email já está cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                permission_id: permission_id,
                role_id: role_id
            },
            select:{
                id: true,
                name: true,
                email: true,
                permission_id: true,
                role_id: true
            }
        })
        
        return user
    }
}

export { CreateUserService }