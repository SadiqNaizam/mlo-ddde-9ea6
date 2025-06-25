import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { CreditCard, MapPin, User, ShoppingBag } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  address: z.string().min(5, { message: 'Please enter a valid address.' }),
  city: z.string().min(2, { message: 'Please enter a valid city.' }),
  zipCode: z.string().regex(/^\d{5}$/, { message: 'Please enter a valid 5-digit zip code.' }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Card number must be 16 digits.' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Please use MM/YY format.' }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: 'CVC must be 3 or 4 digits.' }),
});

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form Submitted:', values);
    toast.success('Order placed successfully!', {
        description: 'We are preparing your luxe meal.',
    });
    navigate('/order-confirmation');
  }

  // Placeholder order summary data
  const orderItems = [
    { name: 'Truffle Risotto', price: 28.00, quantity: 1 },
    { name: 'Seared Scallops', price: 34.00, quantity: 1 },
    { name: 'Lava Cake', price: 15.00, quantity: 1 },
  ];
  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-neutral-900 border-neutral-800 sticky top-28">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  <span>Order Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-neutral-300">
                  {orderItems.map(item => (
                    <li key={item.name} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="bg-neutral-700" />
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-neutral-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                <Separator className="bg-neutral-700" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <CardTitle>Complete Your Order</CardTitle>
                <CardDescription className="text-neutral-400">
                  Please provide your details to finalize your premium dining experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Delivery & Contact Section */}
                    <section className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                        <User className="h-5 w-5" /> Contact Information
                      </h3>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-300">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-black border-neutral-700 focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-300">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} className="bg-black border-neutral-700 focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </section>
                    
                    <Separator className="bg-neutral-800" />
                    
                    <section className="space-y-4">
                       <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                        <MapPin className="h-5 w-5" /> Delivery Address
                      </h3>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-300">Street Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Luxe Lane" {...field} className="bg-black border-neutral-700 focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="city" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-300">City</FormLabel>
                                <FormControl><Input placeholder="Metropolis" {...field} className="bg-black border-neutral-700 focus:border-primary" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="zipCode" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-300">Zip Code</FormLabel>
                                <FormControl><Input placeholder="12345" {...field} className="bg-black border-neutral-700 focus:border-primary" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                      </div>
                    </section>

                    <Separator className="bg-neutral-800" />

                    {/* Payment Section */}
                    <section className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
                        <CreditCard className="h-5 w-5" /> Payment Details
                      </h3>
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-300">Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="•••• •••• •••• ••••" {...field} className="bg-black border-neutral-700 focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="expiryDate" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-300">Expiry Date</FormLabel>
                                <FormControl><Input placeholder="MM/YY" {...field} className="bg-black border-neutral-700 focus:border-primary" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="cvc" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-neutral-300">CVC</FormLabel>
                                <FormControl><Input placeholder="123" {...field} className="bg-black border-neutral-700 focus:border-primary" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                      </div>
                    </section>
                    
                    <CardFooter className="p-0 pt-6">
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">
                            Place Order
                        </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;