import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Index Option Silver Package',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: {
            discounted: '₹₹1,77,000/Monthly',
        },
        description: '*All Prices are inclusive if GST',
        features: [
            'Get two to three research alert per day through WhatsApp broadcast message.',
            'Get one research alerts of Bank Nifty Option or Nifty Option per day.',
            'Get one research alerts of Finnifty every week.',
            'Get one research alerts of Bankex or Sensex every week.',
            'Get Expiry Special research alerts on every weekly expiry.',
            'Get well –researched target & Stop loss on every research alert',
            'Live Market customer support is available',
            'Risk level – High to Very High',
            'Any client who subscribes to the services exceeding ₹1,50,000 will not be eligible to purchase another package within the same financial year.',
        ],
        featured: true,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    return (
        <div className="relative isolate bg-white px-4 py-24 sm:py-32 lg:px-8">
            {/* Background Blob */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>

            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Platinum Pricing</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Index Option Platinum Package
                </p>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features for engaging your audience,
                creating customer loyalty, and driving sales.
            </p>

            {/* Centered Card */}
            <div className="mt-16 flex justify-center sm:mt-20">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            'bg-gray-900 shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 w-full max-w-xl'
                        )}
                    >
                        <h3 id={tier.id} className="text-base font-semibold text-indigo-400">
                            {tier.name}
                        </h3>

                        <div className="mt-2 text-2xl text-white font-semibold">
                            {tier.priceMonthly.discounted}
                        </div>


                        <p className="mt-6 text-base text-gray-300">{tier.description}</p>

                        <ul className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
