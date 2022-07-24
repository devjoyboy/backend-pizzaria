import { Request, Response } from 'express'
import { CreateRoleService } from '../../services/role/CreateRoleService'

class CreateRoleController{
    async handle( req: Request, res: Response){
        const { name, description, permission_id } = req.body

        const createRoleService = new CreateRoleService()
        
        const result = await createRoleService.execute({
            name,
            description,
            permission_id
        })

        return res.json(result)
    }
}

export { CreateRoleController }