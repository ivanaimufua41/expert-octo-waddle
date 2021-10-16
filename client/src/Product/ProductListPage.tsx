import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid'
// import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables'
import { Box, Container } from '@material-ui/core'
import ProductAPI from './ProductAPI'
import { IProduct } from './ProductModel'

const rows: GridRowsProp = [
    {
        id: 1,
        col1: 'Id',
    },
]

const columns: GridColDef[] = [{ field: 'col1', headerName: 'Id' }]

// const columns: MUIDataTableColumnDef[] = [
//     {
//         field: 'Id',
//         label: 'Id',
//     },
//     {
//         name: 'Name',
//         label: 'Name',
//     },
//     {
//         name: 'Brand',
//         label: 'Brand',
//     },
//     {
//         name: 'IsService',
//         label: 'Service Product ?',
//         options: {
//             customBodyRender: (value: unknown) =>
//                 typeof value === 'boolean' && value === true ? 'Yes' : 'No',
//         },
//     },
//     {
//         name: 'OnPromotion',
//         label: 'Promotional Product ?',
//         options: {
//             customBodyRender: (value: unknown) =>
//                 typeof value === 'boolean' && value === true ? 'Yes' : 'No',
//         },
//     },
//     {
//         name: 'OnFeature',
//         label: 'Featured Product ?',
//         options: {
//             customBodyRender: (value: unknown) =>
//                 typeof value === 'boolean' && value === true ? 'Yes' : 'No',
//         },
//     },
//     {
//         name: 'Price',
//         label: 'Price',
//     },
//     {
//         name: 'OnSale',
//         label: 'Sale Product',
//     },
//     {
//         name: 'PublishDate',
//         label: 'Date Published',
//     },
// ]

const ProductListPage = (): JSX.Element => {
    // TODO: add loading indicator for project
    // TODO: style MUI table
    // TODO: add button to redirect to product details
    // TODO: add filtering of product data on list page
    const [products, setProducts] = React.useState<IProduct[]>([])

    React.useEffect(() => {
        const getProductData = async (): Promise<void> => {
            const productsData = (await ProductAPI.getProducts()) as IProduct[]
            setProducts(productsData)
        }
        getProductData()
    }, [])

    return (
        <Container maxWidth="lg">
            <Box sx={{ height: 400, width: '100%' }}>
                {products.length > 0 && (
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        // title="Products"
                        // options={{ filterType: 'checkbox' }}
                    />
                )}
                {products.length === 0 && <div>Loading......</div>}
            </Box>
        </Container>
    )
}

export default ProductListPage
