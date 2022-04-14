import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        email: 'development@medusa.moe',
        password: 'p@s$w0rd!',
        profile: {
            create: {
                username: 'development',
                vanityUrl: 'dev'
            }
        }
    }
]

export async function main() {
    try {
        console.log('seeding database')
        for(const u of userData) {
            const user = await prisma.user.create({
                data: u,
            })
            console.log(`Created user with id: ${user.id}`)
        }
    } catch (error) {
        console.error(error)
        process.exit(1)
    } finally {
        await prisma.$disconnect
    }
}

main()