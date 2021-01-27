import { table, minifyRecords } from '../../lib/airtable'

export default async (req, res) => {
  try {
    const info = await table.select({}).firstPage()
    const formattedInfo = minifyRecords(info)
    res.statusCode = 200
    res.json(formattedInfo)
  } catch (err) {
    res.statusCode = 500
    res.json({
      msg: 'OPPS TRY AGAIN',
      err: `${err}`
    })
  }
}
