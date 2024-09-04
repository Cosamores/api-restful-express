import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users;
}

export async function getById(id) {
    const user = await prisma.user.findOne({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return user;
}



export async function create(user) {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,

        }
    })
    return result
}

export async function list() {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        },
        include: {
            posts: true,
            profile: true,
        },
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
            email: true
        }
    })
    return result;
}






export async function update(user) {
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

