import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. We will contact you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiryMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-fitbeats-dark mb-6">
            Start Your <span className="text-fitbeats-primary">Fitness Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with us today and take the first step towards a healthier, happier you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-fitbeats-light rounded-2xl p-8">
            <h3 className="font-bold text-2xl text-fitbeats-dark mb-6">Book Your Free Consultation</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fitbeats-dark font-semibold">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fitbeats-primary focus:border-transparent transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-fitbeats-dark font-semibold">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fitbeats-primary focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-fitbeats-dark font-semibold">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+91 XXXXX XXXXX" 
                            {...field}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fitbeats-primary focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fitbeats-dark font-semibold">Interested Program</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fitbeats-primary focus:border-transparent transition-all">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="step-aerobics">Step/Floor Aerobics</SelectItem>
                          <SelectItem value="weight-training">Weight Training</SelectItem>
                          <SelectItem value="resistance-training">Resistance Training</SelectItem>
                          <SelectItem value="tabata">Tabata Training</SelectItem>
                          <SelectItem value="pilates">Mat Pilates</SelectItem>
                          <SelectItem value="yoga">Yoga</SelectItem>
                          <SelectItem value="bollyfitx">BollyFit X</SelectItem>
                          <SelectItem value="diet-consultation">Diet Consultation</SelectItem>
                          <SelectItem value="multiple">Multiple Programs</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fitbeats-dark font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Tell us about your fitness goals..."
                          {...field}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fitbeats-primary focus:border-transparent transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={createInquiryMutation.isPending}
                  className="w-full bg-gradient-to-r from-fitbeats-primary to-fitbeats-secondary text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  {createInquiryMutation.isPending ? "Submitting..." : "Book Free Consultation"}
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to receive communications from FitBeats.
                </p>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-fitbeats-primary to-fitbeats-secondary rounded-2xl p-8 text-white mb-8">
              <h3 className="font-bold text-2xl mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Studio Location</h4>
                    <p>698, opposite ATS Gate 5, below Cakeroom,<br/>Niti Khand I, Indirapuram,<br/>Ghaziabad, Uttar Pradesh 201014</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <a href="tel:+919873181842" className="hover:underline">+91 98731 81842</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.955 1.404-5.955s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Follow Us</h4>
                    <a href="https://www.instagram.com/fitbeats.livingwell" target="_blank" rel="noopener noreferrer" className="hover:underline">@fitbeats.livingwell</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Studio Hours</h4>
                    <p>Mon-Sat: 7:00 AM - 9:00 PM<br/>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="tel:+919873181842" 
                className="bg-fitbeats-accent text-fitbeats-dark px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919873181842" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
