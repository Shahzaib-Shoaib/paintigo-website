/* This example requires Tailwind CSS v2.0+ */
import  MegaphoneIcon  from "@heroicons/react/24/outline/MegaphoneIcon";
import  XMarkIcon  from "@heroicons/react/24/outline/XMarkIcon";

export default function BannerTop() {
  return (
    <div className='bg-[#decaff]      '>
      <div className='max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-0 flex-1 flex items-center'>
            <span className='flex p-2 rounded-lg bg-transparent'>
              <MegaphoneIcon
                className='h-6 w-6 text-[#282828] bg-transparent '
                aria-hidden='true'
              />
            </span>
            <p className='ml-3 font-medium text-[#282828] truncate'>
              <span className='md:hidden'>
                US FREE SHIPPING on orders over 29.99&pound; / Also ship to CANADA
              </span>
              <span className='hidden md:inline'>
              US FREE SHIPPING on orders over 29.99&pound; / Also ship to CANADA
              </span>
            </p>
          </div>
          <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
            {/* <a
              href='#'
              className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
            >
              Learn more
            </a> */}
          </div>
          <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
            <button
              type='button'
              className='-mr-1 flex p-2 rounded-md focus:outline-none  sm:-mr-2'
            >
              <span className='sr-only'>Dismiss</span>
              <XMarkIcon className='h-6 w-6 text-[#282828]' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}