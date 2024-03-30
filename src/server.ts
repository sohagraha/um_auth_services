import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Server started at http://localhost:${config.port}`)
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
  }
}

boostrap()
