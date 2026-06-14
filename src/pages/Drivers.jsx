import driverImg from '../assets/driver img.jpg'

function Drivers(){
    return(
        <section className="drivers">
            <div className="drivers-title">
                <div>
                    <h2> إدارة السائقين </h2>
                    <p>نظرة عامة على حالة الأسطول وإدارة العمليات اليومية</p>
                </div>
                <div>
                    <button className="add-new-driver"> <i className="add-user-icon fas fa-user-plus"></i>  إنشاء حساب سائق </button>
                    <button className="password-reset">  إعادة تعيين كلمة المرور </button>
                </div>
            </div>
            <div className="activity-summary">
                <div className="box">
                    <div>
                        <i className="fas fa-user user-i" 
                        style={{color: '#000', backgroundColor: '#F2F4F6'}}></i>
                        <span style={{color: '#16A34A', backgroundColor: '#F0FDF4'}}>+12%</span>
                    </div>
                    <p className="text">جميع السائقين</p>
                    <p className="number">1282</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-check-circle check-i"
                        style={{color: '#16A34A', backgroundColor: '#F0FDF4'}}></i>
                    </div>
                    <p className="text">السائقين النشطين</p>
                    <p className="number">1120</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-bowl-food"
                        style={{color: '#2563EB', backgroundColor: '#EFF6FF'}}></i>
                    </div>
                    <p className="text">العاملين حاليا</p>
                    <p className="number">456</p>
                </div>
                <div className="box">
                    <i className="fas fa-clipboard"
                    style={{color: '#BA1A1A', backgroundColor: '#FFDAD633'}}></i>
                    <p className="text">طلبات معلقة</p>
                    <p className="number">89</p>
                </div>
                <div className="box">
                    <i className="fas fa-truck"
                    style={{color: '#77592E', backgroundColor: '#FDD39E33'}}></i>
                    <p className="text">قيد التوصيل</p>
                    <p className="number">134</p>
                </div>
                <div className="box">
                    <i className="fas fa-check-circle"
                    style={{color: '#191C1E', backgroundColor: '#E0E3E5'}}></i>
                    <p className="text">المكتملة اليوم</p>
                    <p className="number">2841</p>
                </div>
            </div>
            <div className="driver-report">
                <div className="current-driver-div">
                    <p>السائق الحالي بالدور</p>
                    <div className='photo-box'>
                        <img src={driverImg} alt="driver's photo" />
                        <div className='name-box'>
                            <p className="driver-name">أحمد محمد الشمري</p>
                            <span> <i className="fas fa-truck" style={{color: '#fff'}}></i> رقم الشاحنة: 4492 أ ب ج</span>
                            <span><i className="fas fa-map-marker-alt" style={{color: '#fff'}}></i> الرياض - المستودع المركزي</span>
                        </div>
                    </div>
                        <button className='new-request'>إسناد طلب جديد </button>
                        <button className='skip'> تخطي الدور </button>
                </div>
                <div className="reports">
                    <h3>تقارير الأداء </h3>
                    <p>تحميل ملخصات الأداء التفصيلية لجميع السائقين والعمليات</p>
                    <button className="add-btn">
                        <i className="fas fa-chart-bar"></i> تقرير يومي  <i className="fas fa-download" style={{color: '#CBD5E1'}}></i>
                    </button>
                    <button className="list-btn">
                        <i className="fas fa-file-alt"></i> تقرير شهري  <i className="fas fa-download" style={{color: '#CBD5E1'}}></i>
                    </button>
                </div>
            </div>
            <div className="table-box">
                <div className="filter-bar">
                    <div>
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="بحث باسم السائق أو المدينة..." />
                        <select id="cityFilter"  name='cityFilter' defaultValue=''>
                            <option value="جميع المدن" >جميع المدن</option>
                            <option value="جدة">جدة</option>  
                            <option value="الرياض">الرياض</option>
                            <option value="الدمام">الدمام</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="active-drivers">
                            <input type="checkbox" name="active-drivers" id="active-drivers" /> النشيطين فقط
                        </label>
                        <label htmlFor="working-drivers">
                            <input type="checkbox" name="working-drivers" id="working-drivers" /> العاملين حالياً
                        </label>
                    </div>
                </div>
                <table>
                        <tr>
                            <th>اسم السائق</th>
                            <th>رقم الهاتف</th>
                            <th>المدينة</th>
                            <th>نوع المركبة</th>
                            <th>الحالة</th>
                            <th>يعمل الآن</th>
                            <th>إجراءات</th>
                        </tr>
                        <tr>
                            <td><span>ف</span > فيصل العتيبي</td>
                            <td>+966 50 123 4567</td>
                            <td>الرياض</td>
                            <td>شاحنة تريد 12م</td>
                            <td> نشط </td>
                            <td> نعم </td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span>س</span> سعود الحربي</td>
                            <td>+966 55 987 6543</td>
                            <td>جدة</td>
                            <td>بيك أب تويوتا</td>
                            <td> نشط </td>
                            <td> لا </td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span>خ</span> خالد العمري</td>
                            <td>+966 54 321 0987</td>
                            <td>الدمام</td>
                            <td>شاحنة ثقيلة</td>
                            <td>غير نشط </td>
                            <td> لا </td>
                            <td className="actions">
                                <i className="fas fa-circle-check"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span>م</span> ماجد السبيعي</td>
                            <td>+966 56 111 2233</td>
                            <td>الرياض</td>
                            <td>فان بضائع</td>
                            <td> نشط </td>
                            <td> نعم </td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                </table>
                <div className="drivers-num">
                    <span>عرض 4 من أصل 1284 سائق </span>
                    <span>
                        <button>السابق</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>التالي</button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Drivers;