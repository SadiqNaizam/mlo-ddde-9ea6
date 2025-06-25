import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  console.log('OrderConfirmationPage loaded');

  // Placeholder data for the order summary
  const orderDetails = {
    orderNumber: 'CKL-B7X9P2',
    estimatedDelivery: '35-45 minutes',
    items: [
      { id: 1, name: 'Truffle Risotto', qty: 1, price: 28.00 },
      { id: 2, name: 'Luxe Burger', qty: 1, price: 22.50 },
      { id: 3, name: 'Artisan Water', qty: 2, price: 4.00 },
    ],
    subtotal: 58.50,
    deliveryFee: 5.00,
    total: 63.50,
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-neutral-200">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <Card className="bg-neutral-900/50 border-neutral-800 text-white shadow-2xl shadow-primary/10">
            <CardHeader className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight text-primary">Thank You For Your Order!</CardTitle>
              <CardDescription className="text-neutral-400 pt-2">
                Your premium dining experience is being prepared.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-neutral-800/60 border-neutral-700">
                <ShoppingBag className="h-4 w-4 text-primary" />
                <AlertTitle className="text-white">Order Confirmed</AlertTitle>
                <AlertDescription className="text-neutral-300">
                  Your order <span className="font-bold text-primary">{orderDetails.orderNumber}</span> has been placed successfully.
                  Estimated delivery time is <span className="font-semibold text-white">{orderDetails.estimatedDelivery}</span>.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Order Summary</h3>
                <div className="space-y-3">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <p className="text-neutral-300">{item.name} <span className="text-neutral-500">x{item.qty}</span></p>
                      <p className="font-mono text-neutral-200">${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <Separator className="my-4 bg-neutral-700" />
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <p className="text-neutral-400">Subtotal</p>
                        <p className="font-mono text-neutral-300">${orderDetails.subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="text-neutral-400">Delivery Fee</p>
                        <p className="font-mono text-neutral-300">${orderDetails.deliveryFee.toFixed(2)}</p>
                    </div>
                    <Separator className="my-2 bg-neutral-700" />
                    <div className="flex justify-between text-base font-bold text-white">
                        <p>Total</p>
                        <p className="font-mono text-primary">${orderDetails.total.toFixed(2)}</p>
                    </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                <Link to="/">Back to Homepage</Link>
              </Button>
              <p className="text-xs text-neutral-500">You will receive an email confirmation shortly.</p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;