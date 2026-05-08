import express from 'express'
import { fetchData } from '../lib/fetchData.js'

const router = express.Router()

router.get('/', async (request, response) => {
    const params = new URLSearchParams()
    params.set('fields', 'name,uuid,snappmap.snappthis_snapmap_uuid.*.*.*')
    params.set('filter[name][_icontains]', '1J')

    const data = await fetchData('snappthis_group', params)

    response.render('snappmaps.liquid', {
        groups: data?.data || [], currentPage: ''
    })
})

export default router