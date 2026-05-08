import express from 'express'
import { fetchData } from '../lib/fetchData.js'

const router = express.Router()

router.get('/', async (request, response) => {
    const uuid = request.params.uuid
    const path = request.path
    const userId = '505c32d4-88fc-4102-8ef8-0847e9d9292b'

    const paramsSnappmaps = new URLSearchParams()
    const paramsGroups = new URLSearchParams()

    paramsSnappmaps.set('fields', '*.*.*.*')
    paramsSnappmaps.set('filter[uuid][_eq]', uuid)

    paramsGroups.set('fields', 'name,uuid,snappmap.snappthis_snapmap_uuid.*.*.*')
    paramsGroups.set('filter[name][_icontains]', '1J')

    const dataSnappmap = await fetchData('snappthis_snapmap', paramsSnappmaps)
    const dataGroups = await fetchData('snappthis_group', paramsGroups)

    response.render('snappmap.liquid', {
        snappmap: dataSnappmap?.data || [], currentPage: '', path: path, groups: dataGroups?.data || [], userId: userId
    })
})

export default router