function PromoCodes(){
    return(
        <section className="promo-codes">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title"> إدارة أكواد الخصم </h2>
                    <p className="section-topic"> إدارة وتتبع فعالية الحملات الترويجية وقسائم الشراء </p>
                </div>
                <button className="add-new-btn"> إضافة كود جديد + </button>

            </div>
            <div className="activity-summary">
                <div className="box">
                    <p className="text"> إجمالي الأكواد </p>
                    <p className="number">124</p>
                </div>
                <div className="box">
                    <p className="text">الأكواد النشطة </p>
                    <p className="number">86</p>
                </div>
                <div className="box">
                    <p className="text">إجمالي الاستخدام </p>
                    <p className="number">1420</p>
                </div>
                <div className="box">
                    <p className="text">معدل التحويل</p>
                    <p className="number">24.5%</p>
                </div>
            </div>
                <div className="table-box">
                    <div className="table-header">
                        <h3>قائمة الأكواد</h3>
                        <div className="header-icons">
                            <i className="fas fa-filter"></i>
                            <i className="fas fa-download"></i>
                        </div>
                    </div>
                    <table className='table-body'>
                            <tr>
                                <th>الكود</th>
                                <th>نسبة الخصم</th>
                                <th>عدد الاستخدام</th>
                                <th>تاريخ الانتهاء</th>
                                <th>الحالة</th>
                                <th>العمليات</th>
                            </tr>
                            <tr>
                                <td><span>SUMMER20</span></td>
                                <td><span >20%</span></td>
                                <td>450 / 500</td>
                                <td>2024/09/30</td>
                                <td>نشط</td>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-ban"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td><span>PRESTIGE50</span></td>
                                <td><span >50%</span>(الحد اليومي)</td>
                                <td>1,200</td>
                                <td>2024/12/31</td>
                                <td><span>نشط</span></td>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-ban"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td><span>FIRSTORDER</span></td>
                                <td>
                                        <span >15%</span>(أول طلب فقط)
                                </td>
                                <td>890 / 1,000</td>
                                <td>2024/01/01</td>
                                <td><span>غير نشط</span></td>
                                <td className="actions">
                                    <i className="fas fa-trash-alt"></i>
                                    <i className="fas fa-circle-check"></i>
                                    <i className="fas fa-pen"></i>
                                </td>
                            </tr>
                    </table>
                    <div className="table-footer">
                        <span>عرض 3 من أصل 124 كود </span>
                        <span>
                            <button>السابق</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>التالي</button>
                        </span>
                    </div>
            </div>
            <div className="promo-analysis">
                <div className="analysis">
                    <p className="tit"></p>
                    <p></p>
                    <button></button>
                </div>
                <div className="promo-advice">
                    <div>
                        <i></i>
                    </div>
                    <div>
                        <p className="title"></p>
                        <p></p>
                    </div>
                    <div className="img-container">
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PromoCodes;