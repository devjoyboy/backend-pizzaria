import { Request, Response } from 'express'
import { CreatePermissionService } from '../../services/permission/CreatePermissionService'

class CreatePermissionController{
    async handle( req: Request, res: Response){

        const { name, description } = req.body

        const createPermissionService = new CreatePermissionService()

        const permission = await createPermissionService.execute({
            name,
            description
        })

        return res.json(permission)
    }
}

export { CreatePermissionController }