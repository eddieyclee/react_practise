import { useForm, useWatch } from "react-hook-form"
import { useEffect } from "react";
import './assets/all.css'

function AboutReactHookForm () {
    const cities = ['台北', '新竹', '台中'];

    const {
        register, // 用來註冊表單元素
        handleSubmit, // 用來處理表單提交
        control, // 判斷控制的表單
        formState: { errors } // 錯誤訊息
    } = useForm({
        // 使用參數 defaultValues
        defaultValues: {
          email: "abc@gmail.com",
          password: "AAA",
          city: '',
          single: true
        },
        mode: "onChange", // 表單驗證的時機
    });

    const onSubmit1 = (data) => { // 表單送出實際的資料內容
        console.log('data', data);
    };

    const watchForm = useWatch({
        control,
    });
    
    useEffect(() => {
        // console.log('watchForm', watchForm);
    }, [watchForm]);

    console.log('error', errors);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' className={`${errors.email ? 'input-error' : ''}`}
                {...register('email', {
                    required: "Email是必填項目",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "請輸入有效的 Email 格式"
                    }
                })} />
                <span className="form-error">{errors.email ? errors.email.message : ''}</span>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id='password' className={`${errors.email ? 'input-error' : ''}`}
                {...register('password', {
                    required: "密碼是必填項目",
                    minLength: {
                        value: 6,
                        message: "密碼長度至少需為 6 個字元"
                    },
                    maxLength: {
                        value: 12,
                        message: "密碼長度不得超過 12 個字元"
                    }
                })} />
                <span className="form-error">{errors.password ? errors.password.message : ''}</span>
                <br />
                <select name="" {...register('city')}>
                    <option value="" disabled>請選擇</option>
                    {cities.map((city) => {
                        return(
                            <option value={city} key={city}>{city}</option>
                        )
                    })}

                </select>
                <label htmlFor="">是否單身</label>
                <input type="checkbox" {...register('single')} />

                <hr />
                <input type="checkbox" id="food-1" {...register('foods')} value='鍋燒麵' />
                <label htmlFor="food-1">鍋燒麵</label>
                <input type="checkbox" id="food-2" {...register('foods')} value='吐司' />
                <label htmlFor="food-2">吐司</label>
                <input type="checkbox" id="food-3" {...register('foods')} value='麵包' />
                <label htmlFor="food-3">麵包</label>

                <hr />
                <input type="radio" {...register('gender')} value="男" />男
                <input type="radio" {...register('gender')} value="女" />女
                <button type="submit">送出</button>
            </form>
        </>
    )

}

export default AboutReactHookForm