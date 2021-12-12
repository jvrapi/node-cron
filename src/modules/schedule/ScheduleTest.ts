
import {schedule} from 'node-cron'
import { getRepository } from 'typeorm'
import { Info } from '../../entities/Info'
import fs from 'fs'
import path from 'path'
class ScheduleTest{
    async execute(){
        /*
            // todo dia as 00:00
            schedule('00 00 00 * * *', async ()=> {
            const repository = getRepository(Info)
            const info = repository.create({description: 'Test schedule by day'})
            await repository.save(info)
            fs.appendFileSync(path.join(__dirname, '../../../test.txt'), `Database accessed in ${new Date().toLocaleString()}`)
            console.log('Operation Finshied successfully')
        })*/

        schedule('* * * * *', ()=> {
            console.log('Cron is working')
        })
    }
}

export default new ScheduleTest()