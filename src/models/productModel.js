import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async () => {
    const products = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            price: true,
        }
    })
    return products;
}



export async function getById(id) {
    const product = await prisma.user.findOne({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            price: true
        }
    })
    return product;
}

 

export async function create(product) {
    const  result = await prisma.user.create({
        data: product,
        select: {
            id: true,

        }
    })
    return result;
}

export async function list() {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            price: true
        }
    })
    return result;
}


export async function remove(id) {
    const result = await prisma.user.delete({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            price: true
        }
    })
    return result;
}

export async function update(product) {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

