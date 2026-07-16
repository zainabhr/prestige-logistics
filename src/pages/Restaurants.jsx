import resImg from '../assets/Promo.png'
import { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { createPortal } from 'react-dom';

function Restaurants(){
    const [restaurants, setRestaurants] = useState([]) 
    const [dailyReports, setDailyReports] = useState()
    const [monthlyReports, setMonthlyReports] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [resetPassword, setResetPassword] = useState()
    const [showPasswordModel, setPasswordShowModel] = useState(false)
    const [showModel, setShowModel] = useState(false)
    const [mealName, setMealName] = useState()
    const [mealPrice, setMealPrice] = useState()
    const [mealCategory, setMealCategory] = useState()
    const [mealImage1, setMealImage1] = useState([])
    // const [mealImage2, setMealImage2] = useState()
    
    
    console.log( 'stored data', restaurants)

    const fetchRestaurants = () => {
        apiClient.get('admin/resturant/getAllRestaurants').then(res =>{
            console.log('الرد الفعلي من السيرفر:',res.data.data)
            setRestaurants(res.data.data)
            console.log( 'stored data', restaurants)

        }).catch(err=>{
            console.log('error in fetching restaurants', err)
        })
    }

    const toggleModel = () =>{
        setShowModel(!showModel)
        window.scrollTo({top: '-95px' , behavior: 'smooth'})
    }

    const toggleResetPasswordModel = () =>{
        setPasswordShowModel(!showPasswordModel)  
        window.scrollTo({top: '-95px' , behavior: 'smooth'})

    }

    // const handleAddingRestaurant = (event) =>{
    //     event.preventDefault()

    //     const formData = new FormData();
    //     formData.append('fullname', fullname);
    //     formData.append('phone', phone);
    //     formData.append('city', city);
    //     formData.append('description',description);
    //     formData.append('commission_type', commission_type);
    //     formData.append('commission_value', commission_value);
    //     if (resImage) {
    //         formData.append('image', resImage); 
    //     }

    //     apiClient.post('admin/resturant/storeResturant',formData,{
    //         headers:{
    //             'Content-Type':'multipart/form-data'
    //         }
    //     })
    //     .then(res => {
    //         console.log('تمت إضافة المطعم بنجاح', res.data)
    //         fetchRestaurants()
    //     }).catch(err =>{
    //         console.error('حدث خطأ في إضافة المطعم', err)
    //     })
    //     setShowModel(!showModel)
    // }

    const handleAddingMeals = (event) =>{
        event.preventDefault()

        const formData = new FormData();
        formData.append('name', mealName);
        formData.append('original_price', mealPrice);
        formData.append('category_name', mealCategory);

        if (mealImage1.length > 0) {
        mealImage1.forEach((file) => {
            formData.append('images[]', file); 
        });
    }

        apiClient.post('admin/meal/AddMeal/1',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then(res => {
            console.log('تمت إضافة الوجبة بنجاح', res.data)
            fetchRestaurants()
            setMealName('')
            setMealPrice('')
            setMealCategory('')
            setMealImage1('')
        }).catch(err =>{
            console.error('حدث خطأ في إضافة الوجبة', err)
        })
        setShowModel(!showModel)
    }

        const date = new Date()

    const fetchDailyReports = () =>{
        apiClient.get(`admin/resturant/getRestaurantDailyReport/6/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`)
        .then(res => {
            console.log('تمت جلب التقرير اليومي بنجاح', res.data)
            setDailyReports(res.data)
            
        }).catch(err =>{
            console.error('حدث خطأ   ', err)
        })}

    const fetchMonthlyReports = () =>{
        apiClient.get(`admin/resturant/getRestaurantMonthlyReport/6/${date.getFullYear()}/${date.getMonth()}`)
        .then(res => {
            console.log('تم جلب التقرير الشهري  بنجاح', res.data)
            setMonthlyReports(res.data)
        }).catch(err =>{
            console.error('حدث خطأ   ', err)
        })
    }

    const fetchMealsMenu = () =>{
        apiClient.get(`admin/resturant/getRestaurantDetailsWithMeals/1`)
        .then(res => {
            console.log('تم جلب بنجاح', res.data)
            // setMonthlyReports(res.data)
        }).catch(err =>{
            console.error('حدث خطأ   ', err)
        })
    }

    const handleResetPassword = (event) =>{
        event.preventDefault()
        const newPassword = {
        "new_password": resetPassword
        }
        apiClient.post('admin/driverandresturant/resetRestaurantPassword/11',newPassword)
        .then(res => {
            console.log('تم تعديل كلمة السر بنجاح', res.data)

        }).catch(err =>{
            console.error(  'حدث خطأ في تعديل كلمة السر  ', err)
        })
        setPasswordShowModel(!showPasswordModel)
    }


    useEffect(() =>{
        fetchRestaurants()
    },[])

    return(
        <section className="restaurants">
            <div className="section-title-box">
                <div>
                    <h2 className="section-title">إدارة المطاعم </h2>
                    <p className="section-topic">نظرة عامة و التحكم في شركات الطعام والخدمات اللوجستية</p>
                </div>
                <div className='section-title-btns'>
                    <button
                    onClick={toggleResetPasswordModel}
                    className="password-reset">
                        إعادة تعيين كلمة المرور </button>
                    <button 
                    className="add-new-btn">
                        + إضافة مطعم</button>
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
                        {restaurants.length > 0 &&  restaurants.map((item)=>(
                            <tr key={item.id}>
                                <td><span>{item.user.fullname[0]} </span> {item.user.fullname} </td>
                                <td>{item.user.areas[0].city}</td>
                                <td>15%</td>
                                <td>
                                    <span className="table-status active">
                                        {item.status == 'open' ? 'نشط' : 'غير نشط'}
                                    </span>
                                </td>
                                <td>
                                    <i className="fas fa-eye"></i>  
                                    <i className="fas fa-pen"></i>      
                                    <i className="fas fa-cog"></i>      
                                </td>
                            </tr>
                    ))}
                        <tr>
                            <td><span>LU</span> لو بريميير جورميه </td>
                            <td>الرياض</td>
                            <td>15%</td>
                            <td><span className="table-status active"> نشط </span></td>
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
                            <td><span className="table-status active"> نشط </span></td>
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
                            <span className="table-status inactive"> غير نشط </span>
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
                        <button
                        onClick={toggleModel}>
                            <i className="fas fa-plus-square"></i>
                            إضافة وجبة </button>
                        <button
                        onClick={fetchMealsMenu}>
                            <i className="fas fa-utensils"></i> 
                        قائمة الوجبات </button>
                    </div>
                    <hr />
                    <p>الطلبات والتقارير</p>
                    <div className='state-order'>
                        <span><i className="fas fa-clipboard-list" ></i> الطلبات حسب الحالة </span>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="btn-group2" >
                        <button 
                        onClick={fetchMonthlyReports}
                        className="add-btn">
                            <i className="fas fa-file-alt"></i> تقرير شهري
                        </button>
                        <button 
                        onClick={fetchDailyReports}
                        className="list-btn">
                            <i className="fas fa-chart-bar"></i> تقرير يومي
                        </button>
                    </div>
                    {monthlyReports && <p>{monthlyReports.message}</p>}
                    {dailyReports && <p>{dailyReports.message}</p>}


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
            {showPasswordModel && createPortal(
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
                </div>,document.body
            )}
            {showModel && createPortal(
                <div className="overlay">
                    <div className="modal-content">
                        
                        <h2> إضافة وجبة جديدة  </h2>
                        <button 
                        className="close"
                        onClick={() => setShowModel(!showModel)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <form onSubmit={handleAddingMeals}>
                            <label htmlFor="MealName"> اسم الوجبة  </label>
                            <input 
                            type="text" 
                            name="MealName" 
                            id="MealName"
                            onChange={(e)=> setMealName(e.target.value)}
                            required
                            />
                            <label htmlFor="MealPrice"> سعر الوجبة  </label>
                            <input 
                            type="number" 
                            name="MealPrice" 
                            id="MealPrice"
                            onChange={(e)=> setMealPrice(e.target.value)}
                            required
                            />
                            <label htmlFor="category_name"> التصنيف </label>
                            <select 
                            name="category_name" 
                            id="category_name"
                            onChange={(e)=> setMealCategory(e.target.value)}
                            required
                            >
                                <option value=""> اختر تصنيف</option>
                                <option value="شرقي "> شرقي </option>
                                <option value="غربي"> غربي </option>
                            </select>
                            <label htmlFor="ad-image"> صورة الوجبة </label>
                            <input 
                            type="file" 
                            name="ad-image" 
                            id="ad-image" 
                            accept='image/*'
                            onChange={(e)=>{
                                const file = e.target.files[0]
                                if (file){
                                    setMealImage1([file])}
                                }

                            } 
                            required
                            />
                            <button type='submit'>أضف الوجبة</button>
                        </form>
                    </div>               
                </div>,document.body
            ) 
            }
        </section>
    )
}

export default Restaurants;