import('reflect-metadata')
import('./database/connection')
import express from 'express'
import ScheduleTest from './modules/schedule/ScheduleTest'

import { schedule } from 'node-cron'

const app = express()

ScheduleTest.execute()


app.listen(3000, ()=> console.log('Servir is running on port 3000'))