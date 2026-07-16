import driverImg from '../assets/driver img.jpg'
import { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { createPortal } from 'react-dom';



function Drivers(){
    const [drivers, setDrivers] = useState([])    
    const [dailyReports, setDailyReports] = useState()
    const [monthlyReports, setMonthlyReports] = useState()
    const [resetPassword, setResetPassword] = useState()
    const [fullName, setFullName] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [vehicleType, setVehicleType] = useState()
    const [vehicleNumber, setVehicleNumber] = useState()
    const [city, setCity] = useState()
    const [showPasswordModel, setPasswordShowModel] = useState(false)
    const [showModel, setShowModel] = useState(false)
    const [workingHours, setWorkingHours] = useState([
        { day_of_week: "sunday", start_time: "08:00", end_time: "14:00" },
        { day_of_week: "monday", start_time: "09:00", end_time: "17:00" },
        { day_of_week: "tuesday", start_time: "09:00", end_time: "22:00" },
        { day_of_week: "wednesday", start_time: "09:00", end_time: "22:00" },
        { day_of_week: "thursday", start_time: "09:00", end_time: "22:00" },
        { day_of_week: "friday", start_time: "10:00", end_time: "22:00" },
        { day_of_week: "saturday", start_time: "10:00", end_time: "22:00" }
]);

    const fetchDrivers = () => {
        apiClient.get('admin/driver/desplayalldriver').then(res =>{
            console.log('الرد الفعلي من السيرفر:',res.data.data);
            setDrivers(res.data.data)
            console.log( 'stored data', drivers)

        }).catch(err=>{
            console.log('error in fetching drivers', err)
        })
    }
    const date = new Date()
    console.log(date.getDate())

    const fetchDailyReports = () =>{
        apiClient.get(`admin/driver/getDriverDailyReport/10/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)
        .then(res => {
            console.log('تمت جلب التقرير اليومي بنجاح', res.data)
            setDailyReports(res.data)
            
        }).catch(err =>{
            console.error('حدث خطأ   ', err)
        })}

    const fetchMonthlyReports = () =>{
        apiClient.get(`admin/driver/getDriverMonthlyReport/10/${date.getFullYear()}/${date.getMonth()}`)
        .then(res => {
            console.log('تم جلب التقرير الشهري  بنجاح', res.data)
            setMonthlyReports(res.data)
        }).catch(err =>{
            console.error('حدث خطأ   ', err)
        })
    }

    const toggleModel = () =>{
        setShowModel(!showModel)
    }

    const toggleResetPasswordModel = () =>{
        setPasswordShowModel(!showPasswordModel)
    }

    const handleAddingDriver = (event) =>{
        event.preventDefault()

        const driverData = {
            "fullname":  fullName,
            "phone": phoneNum,
            "password": password,
            "vehicle_type": vehicleType,
            "vehicle_number": vehicleNumber,
            "city": city, 
            "working_hours": workingHours
        }

        apiClient.post('admin/driver/storeDriver',driverData)
        .then(res => {
            console.log('تمت إضافة السائق بنجاح', res.data)
            fetchDrivers()
            setFullName('')
            setPhoneNum('')
            setPassword('')
            setVehicleType('')
            setVehicleNumber('')
            setCity('')
        }).catch(err =>{
            console.error('حدث خطأ في إضافة السائق', err)
        })
        setShowModel(!showModel)
    }

    const handleTimeChange = (day, field, value) => {
        setWorkingHours(prevHours =>
        prevHours.map(item =>
        item.day_of_week === day ? { ...item, [field]: value } : item
    )
  );
};

    const handleResetPassword = (event) =>{
        event.preventDefault()
        const newPassword = {
            "new_password": resetPassword
        }
        apiClient.post('admin/driverandresturant/resetDriverOrResturantPassword/13',newPassword)
        .then(res => {
            console.log('تم تعديل كلمة السر بنجاح', res.data)

        }).catch(err =>{
            console.error(  'حدث خطأ في تعديل كلمة السر  ', err)
        })
        setPasswordShowModel(!showPasswordModel)
    }

    const getDriversByCity = (city) =>{
        apiClient.get(`admin/driver/getDriversByCity/${city}`)
        .then(res =>{
            console.log('تم جلب السائقين حسب المدينة بنجاح', res.data.data)
            // setDrivers(res.data.data)
        }).catch(err =>{
            console.error(  ' حدث خطا ما', err)
        })
    }
    const getActiveDrivers = (checked) =>{
        if(checked){
            apiClient.get(`admin/driver/desplayalldriverActive`)
        .then(res =>{
            console.log('تم جلب السائقين  النشيطين بنجاح', res.data.data)
            // setDrivers(res.data.data)
        }).catch(err =>{
            console.error(  ' حدث خطا ما', err)
        })
        }
    }

    const getWorkingDrivers = (checked) =>{
        if(checked){
            apiClient.get(`admin/driver/desplayInactiveButWorkingDrivers`)
        .then(res =>{
            console.log('تم جلب السائقين  العاملين بنجاح', res.data.data)
            // setDrivers(res.data.data)
        }).catch(err =>{
            console.error(  ' حدث خطا ما', err)
        })
        }
        
    }



    useEffect(() =>{
        fetchDrivers()
    },[])

    return(
        <section className="drivers">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title"> إدارة السائقين </h2>
                    <p className="section-topic">نظرة عامة على حالة الأسطول وإدارة العمليات اليومية</p>
                </div>
                <div>
                    <button
                    onClick={toggleModel}
                    className="add-new-btn"> 
                        <i className="add-user-icon fas fa-user-plus"></i> 
                        إنشاء حساب سائق 
                        </button>
                    <button className="password-reset" 
                    onClick={toggleResetPasswordModel}
                    >  
                        إعادة تعيين كلمة المرور </button>
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
                    <button 
                    onClick={fetchDailyReports}
                    className="add-btn">
                        <i className="fas fa-chart-bar"></i> تقرير يومي  <i className="fas fa-download" style={{color: '#CBD5E1'}}></i>
                    </button>
                    {dailyReports && <p>{dailyReports.message}</p>}
                    <button 
                    onClick={fetchMonthlyReports}
                    className="list-btn">
                        <i className="fas fa-file-alt"></i> تقرير شهري  <i className="fas fa-download" style={{color: '#CBD5E1'}}></i>
                    </button>
                    {monthlyReports && <p>{monthlyReports.message}</p>}
                </div>
            </div>
            <div className="table-box">
                <div className="filter-bar">
                    <div>
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="بحث باسم السائق أو المدينة..." />
                        <select id="cityFilter"  
                        name='cityFilter' 
                        defaultValue=''
                        onChange={(e) => getDriversByCity(e.target.value)}
                        >
                            <option value="جميع المدن" >جميع المدن</option>
                            <option value="جدة">جدة</option>  
                            <option value="الرياض">الرياض</option>
                            <option value="الدمام">الدمام</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="active-drivers">
                            <input 
                            type="checkbox" 
                            name="active-drivers" 
                            id="active-drivers"
                            onChange={(e) => getActiveDrivers(e.target.checked)}
                            /> النشيطين فقط
                        </label>
                        <label htmlFor="working-drivers">
                            <input 
                            type="checkbox" 
                            name="working-drivers" 
                            id="working-drivers"
                            onChange={(e) => getWorkingDrivers(e.target.checked)}
                            /> العاملين حالياً
                        </label>
                    </div>
                </div>
                <table className='table-body'>
                        <tr>
                            <th>اسم السائق</th>
                            <th>رقم الهاتف</th>
                            <th>المدينة</th>
                            <th>نوع المركبة</th>
                            <th>الحالة</th>
                            <th>يعمل الآن</th>
                            <th>إجراءات</th>
                        </tr>
                        {drivers.map((item)=>(
                                <tr key={item.id}>
                                <td>
                                    <span className='first-letter'>{item?.fullname[0]}</span >
                                    {item?.fullname} </td>
                                    <td>{item.phone}</td>
                                    <td>الرياض</td>
                                    <td> {item.driver.vehicle_type} </td>
                                    <td><span className="table-status active">
                                        {item.driver.is_active ? 'نشط' : 'غير نشط'}
                                    </span></td>
                                    <td><span className="table-status working"> نعم </span></td>
                                    <td className="actions">
                                        <i className="fas fa-ban"></i>
                                        <i className="fas fa-pen"></i>
                                    </td>
                                </tr>
                    ))}
                        <tr>
                            <td><span className='first-letter'>ف</span > فيصل العتيبي</td>
                            <td>+966 50 123 4567</td>
                            <td>الرياض</td>
                            <td>شاحنة تريد 12م</td>
                            <td><span className="table-status active"> نشط </span></td>
                            <td><span className="table-status working"> نعم </span></td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span className='first-letter'>س</span> سعود الحربي</td>
                            <td>+966 55 987 6543</td>
                            <td>جدة</td>
                            <td>بيك أب تويوتا</td>
                            <td><span className="table-status active"> نشط </span></td>
                            <td><span className="table-status not-working"> لا </span></td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span className='first-letter'>خ</span> خالد العمري</td>
                            <td>+966 54 321 0987</td>
                            <td>الدمام</td>
                            <td>شاحنة ثقيلة</td>
                            <td><span className="table-status inactive"> غير نشط </span></td>
                            <td><span className="table-status not-working"> لا </span></td>
                            <td className="actions">
                                <i className="fas fa-circle-check"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                        <tr>
                            <td><span className='first-letter'>م</span> ماجد السبيعي</td>
                            <td>+966 56 111 2233</td>
                            <td>الرياض</td>
                            <td>فان بضائع</td>
                            <td><span className="table-status active"> نشط </span></td>
                            <td><span className="table-status working"> نعم </span></td>
                            <td className="actions">
                                <i className="fas fa-ban"></i>
                                <i className="fas fa-pen"></i>
                            </td>
                        </tr>
                </table>
                <div className="table-footer">
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
                
            {showPasswordModel && (
                <div className="overlay">
                    <div className="modal-content">
                        
                        <h2>   تعديل كلمة السر  </h2>
                        <button 
                        className="close"
                        onClick={() => setPasswordShowModel(!showPasswordModel)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <form onSubmit={handleResetPassword}>
                            
                            <label htmlFor="new-password">   كلمة السر الجديدة </label>
                            <div className="input-wrapper">
                                <input 
                                    type={showPassword? 'text' : "password"} 
                                    name="new-password" 
                                    id="new-password"
                                    onChange={(e)=> setResetPassword(e.target.value)}
                                    required
                                    />
                                <i className={`fa-regular ${showPassword ? 'fa-eye-slash':'fa-eye'} toggle-password`}
                                    onClick={() => setShowPassword(!showPassword)}></i>
                                </div>
                            
                            <button type='submit'> عدل كلمة السر </button>
                        </form>
                    </div>               
                </div>
            )}
            {showModel && createPortal(
                <div className="overlay">
                    <div className="modal-content"
                    style={{maxWidth:'820px'}}>
                        
                        <h2> إضافة حساب سائق جديد  </h2>
                        <button 
                        className="close"
                        onClick={() => setShowModel(!showModel)}
                        style={{top: '50px'}}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <form onSubmit={handleAddingDriver}
                        style={{display: 'grid',gridTemplateColumns: '1fr 1fr',columnGap: '10px'}}>
                            <label htmlFor="full-name"> الاسم الكامل    </label>
                            <input
                            required 
                            type="text" 
                            name="full-name" 
                            id="full-name"
                            onChange={(e)=> setFullName(e.target.value)}
                            />
                            <label htmlFor="phone"> رقم السائق </label>
                            <input
                            required 
                            type="tel" 
                            name="phone" 
                            id="phone"
                            onChange={(e)=> setPhoneNum(e.target.value)}
                            />
                            <label htmlFor="password"> كلمة السر  </label>
                            <div 
                            className="input-wrapper">
                                <input 
                                    type={showPassword? 'text' : "password"} 
                                    placeholder="password123"
                                    name='password'
                                    onChange={(e)=> setPassword(e.target.value)}
                                    required
                                    />
                                <i className={`fa-regular ${showPassword ? 'fa-eye-slash':'fa-eye'} toggle-password`}
                                    onClick={() => setShowPassword(!showPassword)}></i>
                            </div>
                            <label htmlFor="vehicle-type"> نوع المركبة  </label>
                            <select 
                            name="vehicle-type" 
                            id="vehicle-type"
                            onChange={(e)=> setVehicleType(e.target.value)}
                            required
                            >
                                <option value=""> اختر مركبة</option>
                                <option value="دراجة نارية">دراجة نارية</option>
                                <option value="سيارة">سيارة </option>
                                <option value="شاحنة">شاحنة </option>
                            </select>
                            
                            <label htmlFor="vehicle-number"> رقم المركبة   </label>
                            <input 
                            type="text" 
                            name="vehicle-number" 
                            id="vehicle-number"
                            onChange={(e)=> setVehicleNumber(e.target.value)}
                            required
                            />
                            <label htmlFor="city">  المدينة  </label>
                            <input 
                            type="text" 
                            name="city" 
                            id="city"
                            onChange={(e)=> setCity(e.target.value)}
                            required
                            />
                            <h4> تحديد ساعات العمل </h4>
                            {workingHours.map((item) => (
                                <div key={item.day_of_week} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '15px' }}>
                                    <span style={{ width: '100px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                                        {item.day_of_week}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <label style={{ fontSize: '12px' }}>من:</label>
                                        <input 
                                            type="time" 
                                            value={item.start_time} 
                                            onChange={(e) => handleTimeChange(item.day_of_week, 'start_time', e.target.value)}
                                            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                                            required
                                        />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <label style={{ fontSize: '12px' }}>إلى:</label>
                                        <input 
                                            type="time" 
                                            value={item.end_time} 
                                            onChange={(e) => handleTimeChange(item.day_of_week, 'end_time', e.target.value)}
                                            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                            <button
                            style={{gridColumn: '1 / span 2'}} 
                            type='submit'>أضف السائق</button>
                        </form>
                    </div>               
                </div>,document.body
            )}
        </section>
    )
}

export default Drivers;