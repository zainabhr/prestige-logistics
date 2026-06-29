
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell ,BarChart, Bar , XAxis , ResponsiveContainer } from "recharts";
import driverAhamdPhoto from '../assets/Ahamd Driver.jpg'
import driverKhaledPhoto from '../assets/Khaled Driver.jpg'
import driverLailaPhoto from '../assets/Laila Driver.jpg'
import driverSamiPhoto from '../assets/Sami Driver.jpg'

function Home(){
    const dummyData = 
    [
        { name: '30 يوم', value1: 85, value2: 15 },   
        { name: '21 يوم', value1: 60, value2: 20 },  
        { name: '14 يوم', value1: 90, value2: 10 },  
        { name: '7 يوم', value1: 65, value2: 15 },   
        { name: 'اليوم', value1: 30, value2: 30 },   
        { name: 'اليوم', value1: 30, value2: 30 },      
        { name: 'اليوم', value1: 10, value2: 30 },   
    ];
    // const chartData = 
    // [
    //     { name: 'في الوقت المحدد', value: 75, color: '#3b82f6' }, 
    //     { name: 'تسليم مبكر', value: 15, color: '#10b981' },     
    //     { name: 'متأخر', value: 10, color: '#ef4444' },          
    // ];
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
                    <p className="text"> <span className="dot red"></span>طلبات معلقة  </p>
                    <p className="number">45</p>
                </div>
                <div className="box">
                    <p className="text"><span className="dot blue"></span>قيد التوصيل</p>
                    <p className="number">112</p>
                </div>
                <div className="box">
                    <p className="text"><span className="dot green"></span>اكتملت اليوم</p>
                    <p className="number">2963</p>
                </div>
                <div className="box" 
                    style={{backgroundColor: '#0D1C32'}}>
                    <span style={{color: '#94A3B8'}}
                    >الإيرادات الشهرية</span>
                    <p className="text"
                        style={{color: '#fff', fontSize: '24px'}}>
                        $420000</p>
                    <p style={{color: '#94A3B8'}}>إيرادات اليوم : $15,400</p>
                </div>
            </div>
            <div className="charts-box">
                <div className="bar-chart">
                    <div className="header">
                        <div >
                            <h2 >تحليل الإيرادات</h2>
                            <p >آخر 30 يوماً من العمليات المالية</p>
                        </div>
                        <div >
                            <button className="weekly">أسبوعي</button>
                            <button >شهري</button>
                        </div>
                    </div>
                    <div >
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart
                            data={dummyData}
                            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                            >
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#8884d8', fontSize: 11, fontWeight: 500 }} 
                                dy={10}
                            />
                                <Bar 
                                    dataKey="value1" 
                                    fill="#2563eb"  
                                
                                    barSize={50}
                                    stackId="a"
                                />
                            <Bar 
                                dataKey="value2" 
                                fill="#dbeafe" 
                                barSize={50}   
                                stackId="a"      
                            />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="pie-chart">
                    <div className="header">
                        <div>
                            <h2>توزيع الطلبات</h2>
                            <p>نسبة كفاءة التوصيل اليومية</p>
                        </div>
                    </div>
                    <div>
                        <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={-45}
                                        endAngle={45}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#3b82f6" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={-35}
                                        endAngle={25}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#10b981" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={55}
                                        endAngle={145}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#3b82f6" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={65}
                                        endAngle={135}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#10b981" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={155}
                                        endAngle={245}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#3b82f6" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={165}
                                        endAngle={225}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#10b981" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={255}
                                        endAngle={345}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                    >
                                        <Cell fill="#3b82f6" />
                                    </Pie>
                                    <Pie
                                        data={[{ value: 1 }]}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={265}
                                        endAngle={315}
                                        outerRadius={100}
                                        innerRadius={85}
                                        stroke="none"
                                        dataKey="value"
                                        >
                                        <Cell fill="#10b981" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            {/* <div >
                                <div >92%</div>
                                <div >النجاح</div>
                            </div> */}
                        </div>
                    </div>
                    <div className="colors-code">
                            <div >
                                <p><span className="dot blue"></span>
                            في الوقت المحدد  </p>
                                <span >75%</span>
                            </div>
                            <div >
                                <p ><span className="dot green"></span>
                                تسليم مبكر </p>
                                <span >15%</span>
                            </div>
                            <div >
                                <p ><span className="dot red"></span>
                                متأخر</p>
                                <span >10%</span>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="tables-box">
                <div className="first-col">
                    <div className="header">
                        <h3> آخر الطلبات </h3>
                        <Link> عرض الكل </Link>
                    </div>
                    <table className='table-body'>
                        <tr>
                            <th>رقم الطلب</th>
                            <th>المطعم</th>
                            <th> السائق</th>
                            <th>المبلغ</th>
                            <th>الحالة</th>
                        </tr>
                        <tr>
                            <td dir="ltr" 
                                className="order-num">
                            #PL-8921
                            </td>
                            <td>
                                برجر هاوس الممتاز
                            </td>
                            <td>
                                أحمد محمد 
                            </td>
                            <td className="cost">42.50$</td>
                            <td>قيد التوصيل</td>
                        </tr>
                        <tr>
                            <td dir="ltr" 
                                className="order-num">
                            #PL-8920
                            </td>
                            <td>
                                بيتزا بالاس
                            </td>
                            <td>
                                سارة علي 
                            </td>
                            <td className="cost">18.00$</td>
                            <td>مكتمل</td>
                        </tr>
                        <tr>
                            <td dir="ltr" 
                                className="order-num">
                            #PL-8919
                            </td>
                            <td>
                                جريل آند تشيل
                            </td>
                            <td>
                                ياسين خالد 
                            </td>
                            <td className="cost">65.20$</td>
                            <td>تحضير</td>
                        </tr>
                        <tr>
                            <td dir="ltr" 
                                className="order-num"
                                >
                            #PL-8918
                            </td>
                            <td>
                                سوشي سنترال
                            </td>
                            <td>
                                ليلى حسن
                            </td>
                            <td className="cost">112.45$</td>
                            <td>مكتمل</td>
                        </tr>
                        <tr>
                            <td dir="ltr" 
                                className="order-num"
                                style={{ borderBottomRightRadius: '10px'}}>
                            #PL-8917
                            </td>
                            <td>
                                تاكو تاون
                            </td>
                            <td>
                                عمر فاروق 
                            </td>
                            <td  className="cost">29.90$</td>
                            <td style={{ borderBottomLeftRadius: '10px'}}>ملغى</td>
                        </tr>
                    </table>
                </div>
                
                <div className="special-drivers-box">
                    <div className="header">
                        <p>سائقون متميزون اليوم</p>
                    </div>
                    <div className="special-drivers">
                        <div className="driver-box">
                            <div className='img-container'>
                                <img src={driverAhamdPhoto} alt="driverAhamdPhoto" />
                                <div>
                                    <p className="name">أحمد محمد</p>
                                    <p>12 رحلات , تقييم 4.9</p>
                                </div>
                            </div>
                            <div>
                                <p className="income">$185.00</p>
                                <p className="text">إيرادات اليوم</p>
                            </div>
                        </div>
                        <div className="driver-box">
                            <div className='img-container'>
                                <img src={driverSamiPhoto} alt="driverSamiPhoto" />
                                <div>
                                    <p className="name">سامي سعيد</p>
                                    <p>10 رحلات , تقييم 4.8</p>
                                </div>
                            </div>
                            <div>
                                <p className="income">$142.50</p>
                                <p className="text">إيرادات اليوم</p>
                            </div>
                        </div>
                        <div className="driver-box">
                            <div className='img-container'>
                                <img src={driverKhaledPhoto} alt="driverKhaledPhoto" />
                                <div>
                                    <p className="name">خالد إبراهيم</p>
                                    <p>9 رحلات ، تقييم 5.0</p>
                                </div>
                            </div>
                            <div>
                                <p className="income">$130.20</p>
                                <p className="text">إيرادات اليوم</p>
                            </div>
                        </div>
                        <div className="driver-box">
                            <div className='img-container'>
                                <img src={driverLailaPhoto} alt="driverLailaPhoto" />
                                <div>
                                    <p className="name">ليلى يوسف</p>
                                    <p> 8 رحلات ، تقييم 4.7</p>
                                </div>
                            </div>
                            <div>
                                <p className="income">$115.00</p>
                                <p className="text">إيرادات اليوم</p>
                            </div>
                        </div>
                        <button className="update-btn">
                            مراقبة جميع السائقين
                        </button>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Home;