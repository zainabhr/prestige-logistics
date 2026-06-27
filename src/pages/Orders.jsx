function Orders(){
    return(
        <section className="orders">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة الطلبات</h2>
                    <p className="section-topic"> عرض ومتابعة كافة العمليات اللوجستية في الوقت الفعلي</p>
                </div>
                <div>
                    <button className="filter-btn"> <i className="fas fa-filter"></i> تصفية متقدمة </button>
                    <button className="report-btn"> <i className="fas fa-download"></i> تصدير التقرير </button>
                </div>
            </div>
            <div className="activity-summary">
                <div className="box">
                    <div>
                        <i className="fa-solid fa-box" style={{color: '#475569', backgroundColor: '#F8FAFC'}}></i>
                        <span style={{color: '#16A34A', backgroundColor: '#F0FDF4'}}>+12%</span>
                    </div>
                    <p className="text">إجمالي الطلبات</p>
                    <p className="number">1284</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-clipboard"
                    style={{color: '#EA580C', backgroundColor: '#FFF7ED'}}></i>
                        <span style={{color: '#F97316', backgroundColor: '#FFF7ED'}}>نشط</span>
                    </div>
                    <p className="text">طلبات معلقة</p>
                    <p className="number">42</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-map-marker-alt" 
                        style={{color: '#2563EB', backgroundColor: '#EFF6FF'}}></i>
                        <span style={{color: '#3B82F6', backgroundColor: '#EFF6FF'}}>24 جاري</span>
                    </div>
                    <p className="text">قيد التوصيل</p>
                    <p className="number">156</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-check-circle check-i" 
                            style={{color: '#059669', backgroundColor: '#ECFDF5'}}></i>
                        <span style={{color: '#10B981', backgroundColor: '#F0FDF4'}}>اكتمل</span>
                    </div>
                    <p className="text"> الطلبات المكتملة </p>
                    <p className="number">1086</p>
                </div>
            </div>
            <div className="orders-list">
                <div className="first-col">
                    <h3>قائمة المطاعم المشتركة</h3>
                    <table className='table-body'>
                        <tr>
                            <th>رقم الطلب</th>
                            <th>العميل</th>
                            <th>المطعم / السائق</th>
                            <th>المبلغ</th>
                            <th>الحالة</th>
                            <th>العمليات</th>
                        </tr>
                        <tr>
                            <td>
                                <p  dir="ltr" 
                                    className="order-num">#ORD-9021</p>
                                <p className="order-date">24 / 11 / 2021</p>
                            </td>
                            <td className='img-container'>
                                <span>JS</span>
                                <div>
                                    <p className="client-name"> جاسم السعيد </p >
                                    <p dir="ltr"  className="client-number">+963 50 132 4569</p>
                                </div>
                            </td>
                            <td>
                                <p className="rest-driver-name">
                                    <i className="fas fa-utensils"></i>
                                    برجر ستيشن
                                </p>
                                <p className="rest-driver-name">
                                    <i className="fa-solid fa-location-dot"></i>
                                    فهد المطيري
                                </p>
                            </td>
                            <td dir="ltr"  className="cost">245.00 SAR</td>
                            <td>قيد التوصيل</td>
                            <td>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p dir="ltr"  className="order-num">#ORD-9020</p>
                                <p className="order-date">25 / 12 / 2021</p>
                            </td>
                            <td className='img-container'>
                                <span>MA</span>
                                <div>
                                    <p className="client-name"> منى الأحمد </p>
                                    <p dir="ltr"  className="client-number">+963 55 986 6543</p>
                                </div>
                            </td>
                            <td>
                                <p className="rest-driver-name">
                                    <i className="fas fa-utensils"></i>
                                    بيتزا كينج
                                </p>
                                <p className="rest-driver-name">
                                    <i className="fa-solid fa-location-dot"></i>
                                    خالد المحمد
                                </p>
                            </td>
                            <td dir="ltr"  className="cost">120.50 SAR</td>
                            <td>معلق </td>
                            <td>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p dir="ltr"  className="order-num">#ORD-9018</p>
                                <p className="order-date">26 / 1 / 2022</p>
                            </td>
                            <td className='img-container'>
                                <span>KH</span>
                                <div>
                                    <p className="client-name"> خالد حسن </p>
                                    <p dir="ltr"  className="client-number">+963 55 132 2222</p>
                                </div>
                            </td>
                            <td>
                                <p className="rest-driver-name">
                                    <i className="fas fa-utensils"></i> 
                                    سوشي هاوس
                                </p>
                                <p className="rest-driver-name">
                                    <i className="fa-solid fa-location-dot"></i> 
                                    سلطان القحطاني 
                                </p>
                            </td>
                            <td dir="ltr"  className="cost">380.00 SAR</td>
                            <td> مكتمل </td>
                            <td>
                                <i className="fas fa-eye"></i>  
                                <i className="fas fa-pen"></i>      
                                <i className="fas fa-cog"></i>      
                            </td>
                        </tr>
                    </table>
                    <div className="table-footer">
                        <span>عرض 3 من أصل 1284 طلب  </span>
                        <span>
                            <button>السابق</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>التالي</button>
                        </span>
                    </div>
                </div>
                
                <div className="order-details">
                    <div className="header">
                        <div>
                            <p > قيد التوصيل </p> 
                            <span dir="ltr">#ORD-2021</span>
                        </div>
                        <h3> تفاصيل الطلب</h3>
                        <p>الطلب : 11:30 , التسليم : 12:15 </p>
                    </div>
                    <div className="status-section">
                        <p>حالة التتبع</p>
                        <div className='img-container'>
                                <span className="dot green"></span>
                                <div>
                                    <p className="status"> تم تجهيز الطلب </p>
                                    <p className="time">11:45</p>
                                </div>
                        </div>
                        <div className='img-container'>
                                <span className="dot blue"></span>
                                <div>
                                    <p  className="status"
                                        style={{color:'#334155'}}> السائق في الطريق إلى المطعم </p>
                                    <p className="time">11:52</p>
                                </div>
                        </div>
                        <div className='img-container'>
                                <span className="dot gray"></span>
                                <div>
                                    <p className="status"> تم الاستلام من المطعم</p>
                                    <p className="time">00:00</p>
                                </div>
                        </div>
                    </div>
                    <hr />
                    <div className="status-section">
                        <div className='img-container'>
                                <i className="fas fa-user user-i"></i>
                                <div>
                                    <p className="label">العميل</p>
                                    <p className="name"> جاسم السعيد </p>
                                    <p className="time">حي النخيل، شارع الأمير نايف، الرياض</p>
                                </div>
                        </div>
                        <div className='img-container'>
                                <i className="fas fa-utensils"></i> 
                                <div>
                                    <p className="label"> المطعم </p>
                                    <p className="name">برجر ستيشن - فرع التخصصي</p>
                                </div>
                        </div>
                        <div className='img-container'>
                                <i className="fas fa-truck"></i>
                                <div>
                                    <p className="label"> السائق </p>
                                    <p className="name"> فهد المطيري</p>
                                    <p className="time">4.9</p>
                                </div>
                        </div>
                    </div>
                    <hr />
                    <div className="meals-list">
                        <p>قائمة الوجبات</p>
                        <div className="meal-row">
                            <span className="meal-name">2x وجبة برجر دبل كلاسيك</span>
                            <span className="meal-price">180.00 SAR</span>
                        </div>
                        <div className="meal-row">
                            <span className="meal-name">1x بطاطس بالجبنة - حجم كبير</span>
                            <span className="meal-price">35.00 SAR</span>
                        </div>
                        <div className="meal-row">
                            <span className="meal-name">2x كوكاكولا</span>
                            <span className="meal-price">10.00 SAR</span>
                        </div>

                        <div className="delivery">
                            <div className="delivery-row">
                                <span className="label">المجموع الفرعي</span>
                                <span className="value">225.00 SAR</span>
                            </div>
                            <div className="delivery-row">
                                <span className="label">رسوم التوصيل</span>
                                <span className="value">20.00 SAR</span>
                            </div>
                            <hr />
                            <div className="total-row">
                                <span>الإجمالي</span>
                                <span className="total-price">245.00 SAR</span>
                            </div>
                        </div>
                        <button className="update-btn">
                            <i className="fa-solid fa-pen-to-square"></i> تحديث الحالة
                        </button>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Orders;