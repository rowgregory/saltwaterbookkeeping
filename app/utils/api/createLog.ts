import prisma from '@/prisma/client'

const createLog = async (message: string, level: string, userId?: string, error?: unknown) => {
  // If the error is an object, format it into a readable string
  if (error && typeof error === 'object') {
    // Optionally stringify the object for logging
    message = `${message} - Details: ${JSON.stringify(error)}`
  } else if (error instanceof Error) {
    message = `${message}: ${error.message}`
  }

  await prisma.log.create({
    data: {
      message,
      level,
      userId
    }
  })
}

export default createLog
