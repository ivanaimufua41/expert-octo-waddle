import React from 'react'
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables'
import ProductAPI from './ProductAPI'
import { IProduct } from './ProductModel'

const columns: MUIDataTableColumnDef[] = [
    {
        name: 'Id',
        label: 'Id',
    },
    {
        name: 'Name',
        label: 'Name',
    },
    {
        name: 'Brand',
        label: 'Brand',
    },
    {
        name: 'IsService',
        label: 'Service Product ?',
        options: {
            customBodyRender: (value: unknown) =>
                typeof value === 'boolean' && value === true ? 'Yes' : 'No',
        },
    },
    {
        name: 'OnPromotion',
        label: 'Promotional Product ?',
        options: {
            customBodyRender: (value: unknown) =>
                typeof value === 'boolean' && value === true ? 'Yes' : 'No',
        },
    },
    {
        name: 'OnFeature',
        label: 'Featured Product ?',
        options: {
            customBodyRender: (value: unknown) =>
                typeof value === 'boolean' && value === true ? 'Yes' : 'No',
        },
    },
    {
        name: 'Price',
        label: 'Price',
    },
    {
        name: 'OnSale',
        label: 'Sale Product',
    },
    {
        name: 'PublishDate',
        label: 'Date Published',
    },
]

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
        <div style={{ height: 400, width: '100%' }}>
            {products.length > 0 && (
                <MUIDataTable
                    columns={columns}
                    data={products}
                    title="Products"
                    options={{ filterType: 'checkbox' }}
                />
            )}
            {products.length === 0 && <div>Loading......</div>}
        </div>
    )
}

export default ProductListPage
