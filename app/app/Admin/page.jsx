'use client';

import React, { useContext, useState } from 'react';
import Intro from '../Components/intro';
import { ProductContext } from '../Context/ProductContext';
import { AuthContext } from '../Context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import AddProduct from '../Components/AddProduct';

const Admin = () => {
    const [mode, setMode] = useState(null);
    const { products, addNewProduct, DeleteProduct } = useContext(ProductContext);
    const { users, deleteUser } = useContext(AuthContext);
    const [AddMenu , setAddMenu] = useState(false)
    return (
        <div className='flex flex-col gap-6 w-full py-20 px-10 min-h-screen bg-gray-100'>
            <Intro title={'Admin Dashboard'} desc={'Control and manage the website from here'} />
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div onClick={() => setMode('Projects')} className='admin-card'>
                    <span>Projects</span>
                    <span className='text-yellow-600 font-bold'>20</span>
                </div>
                <div onClick={() => setMode('Products')} className='admin-card'>
                    <span>Products</span>
                    <span className='text-yellow-600 font-bold'>{products.length}</span>
                </div>
                <div onClick={() => setMode('Users')} className='admin-card'>
                    <span>Users</span>
                    <span className='text-yellow-600 font-bold'>{users.length}</span>
                </div>
            </div>

            {mode === 'Products' && (
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <Intro title={'Products'} desc={'Manage all products'} />
                        <button onClick={()=> setAddMenu(true)} className='btn-primary'>Add Product</button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        {products.map((product) => (
                            <div key={product._id} className='product-card'>
                                <span className='price-badge'>${product.price}</span>
                                <Link href={`/Shop/${product._id}`}>
                                    <Image src={product?.image[0]?.url} alt={product.name} width={400} height={400} className='product-image' />
                                </Link>
                                <span className='text-yellow-600 text-lg font-semibold'>{product.name}</span>
                                <button onClick={() => DeleteProduct(product._id)} className='btn-danger'>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {mode === 'Users' && (
                <div className='w-full'>
                    <Intro title={'Users'} desc={'Manage all users'} />
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                        {users.map((user) => (
                            <div key={user.id} className='user-card'>
                                <Image src={user?.profilePhoto?.url} alt='profile_image' width={200} height={200} className='w-[80px] h-[80px] rounded-full'/>
                                <span className='text-lg font-semibold'>{user.name}</span>
                                <span className='text-sm text-gray-600'>{user.profileName}</span>
                                <button onClick={() => deleteUser(user.id)} className='btn-danger mt-3'>Delete User</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <AddProduct AddMenu={AddMenu} setAddMenu={setAddMenu} />
        </div>
    );
};

export default Admin;
