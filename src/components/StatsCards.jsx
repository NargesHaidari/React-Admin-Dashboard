import StatsCard from './StatsCard'

let array = [
    {
        iconBg : 'bg-sales-bg',
        iconColor : 'text-sales',
        icon : 'fa-cart-shopping',
        title : 'Total sales',
        price : '$ 47850'
    },
    {
        iconBg : 'bg-orders-bg',
        iconColor : 'text-orders',
        icon : 'fa-bag-shopping',
        title : 'Orders',
        price : 1256
    },
    {
        iconBg : 'bg-customers-bg',
        iconColor : 'text-customers',
        icon : 'fa-user',
        title : 'Customers',
        price : 3890
    },
    {
        iconBg : 'bg-order-bg',
        iconColor : 'text-order',
        icon : 'fa-credit-card',
        title : 'Avg. Order Value',
        price : '$ 38.79'
    },
    {
        iconBg : 'bg-profit-bg',
        iconColor : 'text-profit',
        icon : 'fa-sack-dollar',
        title : 'Total Profit',
        price : '$ 12540'
    }
]

export default function StatsCards(){
    return(
        <div className='flex gap-4'>
            {
                array.map(item => <StatsCard iconBg={item.iconBg} iconColor={item.iconColor} icon={item.icon} title={item.title} price={item.price} />)
            }
        </div>
    )
}