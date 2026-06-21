function Home(){
    return(
        <section className="home">
            <h2 className="section-title">نظرة عامة على العمليات</h2>
            <p className="section-topic">أهلاً بك مجدداً إليك ملخص نشاط Pristige Logistics لليوم</p>
            <div className="activity-summary">
                <div className="box">
                    <div>
                        <i className="fas fa-user user-i"></i>
                        <span style={{color: '#16A34A', backgroundColor: '#F0FDF4'}}>+12%</span>
                    </div>
                    <p className="text">إجمالي السائقين</p>
                    <p className="number">1240</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-check-circle check-i"></i>
                        <span></span>
                    </div>
                    <p className="text">السائقون النشطون</p>
                    <p className="number">850</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-utensils utensils-i"></i>
                        <span style={{color: '#94A3B8'}}>4 مناطق</span>
                    </div>
                    <p className="text">إجمالي المطاعم</p>
                    <p className="number">420</p>
                </div>
                <div className="box">
                    <div>
                        <i className="fas fa-receipt receipt-i"></i>
                        <span style={{color: '#4F46E5', backgroundColor: '#EEF2FF'}}>
                            رقم قياسي</span>
                    </div>
                    <p className="text">طلبات اليوم</p>
                    <p className="number">3120</p>
                </div>
                <div className="box">
                    <p className="text">طلبات معلقة</p>
                    <p className="number">45</p>
                </div>
                <div className="box">
                    <p className="text">قيد التوصيل</p>
                    <p className="number">112</p>
                </div>
                <div className="box">
                    <p className="text">اكتملت اليوم</p>
                    <p className="number">2963</p>
                </div>
                <div className="box">
                    <span>الإيرادات الشهرية</span>
                    <i className="fas fa-receipt"></i>
                    <p className="text">$420000</p>
                    <p className="number"></p>
                </div>
            </div>
        </section>
    )
}

export default Home;