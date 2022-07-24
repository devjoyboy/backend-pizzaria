import prismaClient from "../../prisma"

interface OrderRequest{
    table_id: string
    name: string
}

class CreateOrderService{
    async execute({ table_id, name }: OrderRequest){

        const order = await prismaClient.order.create({
            data:{
                table_id: table_id,
                name: name
            }
        })

        return order

    }
}

export { CreateOrderService }