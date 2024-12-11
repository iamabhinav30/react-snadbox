import { Controller, useForm } from "react-hook-form";

function FormComponent() {
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            age: '',
        }
    });

    const onSubmit = (data) => {
        console.log('Form Data Submitted:', data);
    }
    return (
        <div style={{ margin: '20px' }}>
            <h2> Form Example</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Input */}
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        placeholder="Enter your name"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Enter a valid email address',
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                {/* Age Input (Using Controller for Custom Integration) */}
                <div>
                    <label htmlFor="age">Age</label>
                    <Controller
                        name="age"
                        control={control}
                        rules={{
                            required: 'Age is required',
                            min: { value: 18, message: 'You must be at least 18 years old' },
                            max: { value: 100, message: 'Enter a valid age below 100' },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                id="age"
                                type="number"
                                placeholder="Enter your age"
                            />
                        )}
                    />
                    {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '20px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;