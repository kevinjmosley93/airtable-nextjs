import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

const table = base(process.env.AIRTABLE_TABLE_NAME)

const getMinifiedRecord = record => {
  return {
    id: record.id,
    fields: record.fields
  }
}

const minifyRecords = records => {
  return records.map(record => getMinifiedRecord(record))
}

export default async (req, res) => {
  const info = await table.select({}).firstPage()
  const lilInfo = minifyRecords(info)
  res.statusCode = 200
  res.json(lilInfo)
}
