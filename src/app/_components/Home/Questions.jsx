import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from 'next-intl';


export default function Questions() {
    const t = useTranslations('HomePage.questions');
    const cards = Object.values(t.raw('card'));
    return <>
        <section id="questions">
            <div className="container mx-auto">
                {/* start title */}
                <div className="title animate__animated animate__fadeInUp">
                    <h4 className='font-bold text-2xl md:text-4xl'>{t('titleH4')}</h4>
                    <p className='text-lg md:text-xl'>{t('titleP')}</p>
                </div>
                <div className="bg-[#F8F8F8] rounded-2xl p-4 md:p-8 ">
                    <div className="bg-white rounded-2xl p-3 md:p-5">
                        {cards.map((card, index) => (
                            <div key={index}>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger className="text-[16px] md:text:xl font-normal text-start">{card.ques}</AccordionTrigger>
                                        <AccordionContent className="text-[#8E8E93] font-normal text-start">
                                            {card.ans}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        ))}

                    </div>
                </div>





            </div>
        </section>

    </>
}
