<template>
  <section class="my-8 bg-black">
    <h1 class="text-center text-white py-6 text-lg">Testimonials</h1>
    <div class="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16 dark:text-violet-400">
        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384" />
        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z" />
      </svg>
      <p class="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">
        "{{ testimonials[activeTestimonyIndex].description }}"
      </p>
      <div class="flex justify-center space-x-3">
        <img src="https://source.unsplash.com/80x80/?portrait?1" alt="" class="w-10 h-10 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700">
        <div>
          <p class="leadi text-white">
            {{ testimonials[activeTestimonyIndex].user }}
          </p>
          <p class="text-sm leadi text-white">
            {{ testimonials[activeTestimonyIndex].position }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpdatedTestimonials',
  data () {
    return {
      activeTestimonyIndex: 0,
      timer: 0,
      testimonials: [
        {
          description: 'Very easy to use. I could probably go into sales for you. I love your system. Just what I was looking for.',
          user: 'Junjie Liu',
          position: 'Australia'
        },
        {
          description: 'Financial stabilty was a challenge until Fintel Values . I think everyone show try them! ',
          user: 'Austin Jenkins',
          position: 'Virginia'
        },
        {
          description: 'Frankly speaking, I sleep better at night knowing that my finances are getting better with Fintel Values. ',
          user: 'Joseph',
          position: 'London'
        }
      ]
    }
  },
  mounted () {
    this.startSlider()
  },
  unmounted () {
    clearInterval(this.timer)
  },
  methods: {
    startSlider () {
      this.timer = setInterval(this.next, 5000)
    },
    next () {
      this.activeTestimonyIndex += 1
      if (this.activeTestimonyIndex === 3) {
        this.activeTestimonyIndex = 0
      }
    },
    previous () {
      this.activeTestimonyIndex -= 1
    }
  }
}
</script>
