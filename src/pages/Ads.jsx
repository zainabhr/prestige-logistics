import summerOfferImg from '../assets/summer offer img.jpg'
import weekOfferImg from '../assets/week offer img.jpg'

function Ads(){
    return(
        <section className="ads">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة الإعلانات</h2>
                    <p className="section-topic">تتبع وتحكم في جميع الحملات الإعلانية النشطة والمجدولة</p>
                </div>
                <button className="add-new-btn">أضف إعلان جديد</button>

            </div>
            <div className="activity-summary">
                <div className="box">
                    <p className="text">إجمالي الإعلانات</p>
                    <p className="number">24</p>
                    <span style={{color: '#16A34A'}}>+4 هذا الشهر</span>
                </div>
                <div className="box">
                    <p className="text">الحملات النشطة</p>
                    <p className="number">12</p>
                        <span style={{color: '#64748B',}}>5 تنتهي قريباً</span>
                </div>
                <div className="box">
                    <p className="text">مرات الظهور</p>
                    <p className="number">1.2M</p>
                        <span style={{color: '#16A34A'}}>+12% زيادة</span>
                </div>
                <div className="box">
                    <p className="text">معدل النقرات</p>
                    <p className="number">4.8%</p>
                        <span style={{color: '#64748B',}}>متوسط الحملات</span>
                </div>                
            </div>
            <div className="ads-list">
                <h3>قائمة الإعلانات</h3>
                <table className='table-body'>
                    <tr>
                        <th>الصورة</th>
                        <th>العنوان</th>
                        <th>تاريخ البداية</th>
                        <th>تاريخ النهاية</th>
                        <th>الحالة</th>
                        <th>العمليات</th>
                    </tr>
                    <tr>
                        <td><img src={summerOfferImg} alt="summer Offer Img" /></td>
                        <td>
                            <p>عرض الصيف للمطاعم</p>
                            <span>#AD-99210</span>
                        </td>
                        <td>15 / 5 / 2024</td>
                        <td>15 / 8 / 2024</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td><img src={weekOfferImg} alt="week Offer Img" /></td>
                        <td>
                            <p>تخفيضات أسبوع اللوجستيات</p>
                            <span>#AD-99211</span>
                        </td>
                        <td>1 / 4 / 2024</td>
                        <td>15 / 4 / 2024</td>
                        <td>Inactive</td>
                    </tr>
                </table>
                <div className="table-footer">
                    <span>عرض 2 من أصل 20</span>
                    <span>
                        <button>السابق</button>
                        <button>1</button>
                        <button>2</button>
                        <button>التالي</button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Ads;