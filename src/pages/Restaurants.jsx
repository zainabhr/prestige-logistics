import resImg from '../assets/Promo.png'

function Restaurants(){
    return(
        <section className="restaurants">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة المطاعم </h2>
                    <p className="section-topic">نظرة عامة و التحكم في شركات الطعام والخدمات اللوجستية</p>
                </div>
                <div>
                    <button className="password-reset">  إعادة تعيين كلمة المرور </button>
                    <button className="add-new-btn">  + إضافة مطعم</button>
                </div>
            </div>
            <div className="activity-summary">
                <div className="box">
                    <div>
                        <p className="text">إجمالي المطاعم</p>
                        <p className="number">1284</p>
                        <span style={{color: '#16A34A'}}>+12% من الشهر الماضي</span>
                    </div>
                    <i className="fas fa-store" 
                    style={{color:'#39475F',backgroundColor: '#D6E3FF'}}></i>
                </div>
                <div className="box">
                    <div>
                        <p className="text">المطاعم النشطة</p>
                        <p className="number">942</p>
                        <span >+12% من الإجمالي</span>
                    </div>
                            <i className="fas fa-check-circle"
                            style={{color:'#16A34A',backgroundColor: '#F0FDF4'}}></i>
                </div>
                <div className="box">
                    <div>
                        <p className="text">الطلبات المسلمة اليوم</p>
                        <p className="number">4512</p>
                        <span style={{color: '#16A34A'}}>في المسار الصحيح</span>
                    </div>
                    <i className="fas fa-motorcycle" 
                    style={{color:'#785A2E',backgroundColor: '#FDD39E'}}></i>
                </div>
                <div className="box">
                    <div>
                        <p className="text">الطلبات الشهرية</p>
                        <p className="number">142800</p>
                        <span >إجمالي مبيعات المنطقة</span>
                    </div>
                    <i className="fas fa-calendar-alt" 
                    style={{color:'#44474D',backgroundColor: '#E6E8EA'}}></i>
                </div>
            </div>
            <div className="rest-list">
                <div className="first-col">
                    <div className="table-header">
                        <h3>قائمة المطاعم المشتركة</h3>
                        <button>تنزيل التقرير</button>
                    </div>
                    <table className='table-body'>
                        <tr>
                            <th>اسم المطعم</th>
                            <th>المدينة</th>
                            <th>العمولة (%)</th>
                            <th>الحالة</th>
                            <th>العمليات</th>
                        </tr>
                        <tr>
                            <td><span>LU</span> لو بريميير جورميه </td>
                            <td>الرياض</td>
                            <td>15%</td>
                            <td>نشط</td>
                            <td>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                        <tr>
                            <td><span>ST</span> ستيك هاوس الرواد </td>
                            <td>جدة</td>
                            <td>12%</td>
                            <td>نشط</td>
                            <td>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderBottomRightRadius: '10px'}}>
                                <span>AR</span> أروما كافيه 
                            </td>
                            <td>الدمام</td>
                            <td>10%</td>
                            <td>غير نشط</td>
                            <td style={{ borderBottomLeftRadius: '10px'}}>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                    </table>
                </div>
                
                <div className="rest-details">
                    <h3>تفاصيل المطعم والإدارة</h3>
                    <p>إدارة الوجبات</p>
                    <div className="btn-group1">
                        <button><i className="fas fa-plus-square"></i> إضافة وجبة </button>
                        <button><i className="fas fa-utensils"></i> قائمة الوجبات </button>
                    </div>
                    <hr />
                    <p>الطلبات والتقارير</p>
                    <div className='state-order'>
                        <span><i className="fas fa-clipboard-list" ></i> الطلبات حسب الحالة </span>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="btn-group2" >
                        <button className="add-btn">
                            <i className="fas fa-file-alt"></i> تقرير شهري
                        </button>
                        <button className="list-btn">
                            <i className="fas fa-chart-bar"></i> تقرير يومي
                        </button>
                    </div>
                    <hr />
                    <form action="">
                        <p>إعدادات العمولة و التوصيل</p>
                        <label htmlFor="currency">تحديث نسبة العمولة</label>
                        <input type="number" name="currency" id="currency" />
                        <label htmlFor="delivary-region">إعدادت منطقة التوصيل (كم)</label>
                        <input type="number" name="delivary-region" id="delivary-region" />
                        <button>حفظ التعديلات</button>
                    </form>
                    
                    <img src={resImg} alt="resturant plate image" />
                </div>
            </div>
        </section>
    )
}

export default Restaurants;