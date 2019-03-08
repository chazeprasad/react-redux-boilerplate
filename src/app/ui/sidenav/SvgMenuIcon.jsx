import React, { Component } from 'react';

import DashboardIco from '../../../media/img/icon_dashboard.svg'
import OffersIco from '../../../media/img/offers.svg'
import OrdersIco from '../../../media/img/orders.svg'
import SettingsIco from '../../../media/img/settings.svg'
import ReportsIco from '../../../media/img/reports.svg'
import UploadIco from '../../../media/img/upload.svg'
import DownloadIco from '../../../media/img/download.svg'
import AvailablityIco from '../../../media/img/availability.svg'
import ProductsIco from '../../../media/img/products.svg'

class SvgMenuIcon extends Component {
    icons = {
        Dashboard: DashboardIco,
        Offers: OffersIco,
        Orders: OrdersIco,
        Settings: SettingsIco,
        Reports: ReportsIco,
        Upload: UploadIco,
        Download: DownloadIco,
        Availablity: AvailablityIco,
        Availablity: AvailablityIco,
        Products: ProductsIco
    };
    render() {
       const TagName = this.icons[this.props.ico || 'Dashboard'];
       return <TagName className="ico" />
    }
}
export default SvgMenuIcon;
