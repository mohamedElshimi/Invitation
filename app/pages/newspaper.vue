<template>
  <div class="min-h-screen bg-parchment py-6 px-4 font-cormorant">
    <div class="max-w-2xl mx-auto">
      <!-- Newspaper -->
      <div
        class="bg-[#f8f0e0] shadow-2xl border border-[#d4c5a0] relative overflow-hidden"
        :class="{ 'animate-unfold': showPaper }"
      >
        <!-- Aged paper texture overlay -->
        <div class="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />

        <div class="relative p-6 md:p-10">
          <!-- Newspaper Header -->
          <div class="text-center border-b-4 border-double border-[#3d2b1f] pb-4 mb-1">
            <p class="text-xs tracking-[0.4em] text-[#8b7355] uppercase">
              Vol. MMXXVI &middot; No. 1 &middot; Special Edition
            </p>
            <h1
              class="font-playfair text-5xl md:text-7xl font-black text-[#2a1810] mt-2 mb-1 leading-tight tracking-tight"
              :class="{ 'animate-reveal': showPaper }"
            >
              THE ENGAGEMENT
            </h1>
            <p class="text-xs tracking-[0.3em] text-[#8b7355] uppercase">
              Thursday, April 16, 2026 &middot; Special Announcement
            </p>
          </div>

          <!-- Decorative line -->
          <div class="flex items-center gap-2 my-3">
            <div class="flex-1 h-px bg-[#3d2b1f]" />
            <span class="text-gold text-lg">&#10047;</span>
            <div class="flex-1 h-px bg-[#3d2b1f]" />
          </div>

          <!-- Couple Photo -->
          <div class="text-center mb-6" :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 0.2s">
            <div class="inline-block relative">
              <div class="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-lg">
                <img
                  src="public/img/our.jpeg"
                  alt="Elshimi & Fatma"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#f8f0e0] px-4 py-1 border border-gold rounded-full">
                <span class="font-dancing text-gold-dark text-sm">E & F</span>
              </div>
            </div>
          </div>

          <!-- Names -->
          <div class="text-center mb-6" :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 0.4s">
            <h2 class="font-dancing text-gold text-5xl md:text-6xl mb-2">Elshimi</h2>
            <p class="font-playfair text-[#8b7355] text-xl tracking-widest">&amp;</p>
            <h2 class="font-dancing text-gold text-5xl md:text-6xl mt-2">Fatma</h2>
            <p class="font-playfair text-[#2a1810] text-lg mt-3 tracking-wide">Are Getting Engaged!</p>
          </div>

          <!-- Two-column layout -->
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <!-- Left column - Story -->
            <div :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 0.6s">
              <div class="border-t-2 border-[#3d2b1f] pt-3">
                <h3 class="font-playfair font-bold text-lg text-[#2a1810] uppercase tracking-wider mb-2">
                  Breaking News
                </h3>
                <p class="text-[#3d2b1f] leading-relaxed text-base first-letter:text-4xl first-letter:font-playfair first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:leading-none first-letter:text-[#2a1810]">
                  Two hearts have found their forever home in each other.
                  Elshimi and Fatma are thrilled to announce their engagement
                  and warmly invite you to share in the joy of this beautiful milestone.
                  Your presence will make this celebration truly complete.
                </p>
              </div>
            </div>

            <!-- Right column - Details -->
            <div :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 0.8s">
              <div class="border-t-2 border-[#3d2b1f] pt-3">
                <h3 class="font-playfair font-bold text-lg text-[#2a1810] uppercase tracking-wider mb-2">
                  The Details
                </h3>
                <div class="space-y-3 text-[#3d2b1f]">
                  <div class="flex items-start gap-3">
                    <span class="text-gold text-xl mt-0.5">&#128197;</span>
                    <div>
                      <p class="font-bold text-sm uppercase tracking-wide">Date</p>
                      <p class="text-base">Thursday, April 16, 2026</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-gold text-xl mt-0.5">&#128336;</span>
                    <div>
                      <p class="font-bold text-sm uppercase tracking-wide">Time</p>
                      <p class="text-base">Six o'clock in the evening</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <span class="text-gold text-xl mt-0.5">&#128205;</span>
                    <div>
                      <p class="font-bold text-sm uppercase tracking-wide">Venue</p>
                      <p class="text-base">Gardenia Hall</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex-1 border-t border-dashed border-[#b8a88a]" />
            <span class="font-dancing text-gold text-xl">with love</span>
            <div class="flex-1 border-t border-dashed border-[#b8a88a]" />
          </div>

          <!-- Location Map & RSVP -->
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 1s">
              <a
                href="https://maps.app.goo.gl/mYAQwEpzt2VYQyNn8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-[#f0e6d0] p-4 border border-[#d4c5a0] text-center hover:bg-[#ebe0c8] transition-colors group"
              >
                <h3 class="font-playfair font-bold text-sm uppercase tracking-[0.2em] text-[#2a1810] mb-2">
                  Location
                </h3>
                <div class="text-gold text-4xl mb-2">&#128206;</div>
                <p class="font-dancing text-2xl text-gold-dark">Gardenia Hall</p>
                <p class="text-sm text-[#8b7355] mt-2 group-hover:text-gold-dark transition-colors underline">
                  Open in Google Maps &rarr;
                </p>
              </a>
            </div>
            <div :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 1.2s">
              <div class="bg-[#f0e6d0] p-4 border border-[#d4c5a0] text-center">
                <h3 class="font-playfair font-bold text-sm uppercase tracking-[0.2em] text-[#2a1810] mb-2">
                  Save The Date
                </h3>
                <div class="text-gold text-4xl mb-2">&#128141;</div>

                <p class="font-dancing text-2xl text-gold-dark">16 . 04 . 2026</p>
                <p class="text-sm text-[#8b7355] mt-2">Thursday Evening</p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="text-center border-t-2 border-[#3d2b1f] pt-4" :class="{ 'animate-slide-up': showPaper }" style="animation-delay: 1.4s">
            <p class="font-dancing text-3xl text-gold-dark mb-1">We can't wait to celebrate with you!</p>
            <p class="font-playfair text-sm text-[#8b7355] mt-2 tracking-wide">
              Elshimi &hearts; Fatma
            </p>
            <div class="flex justify-center gap-2 mt-3">
              <span class="text-gold">&#10047;</span>
              <span class="text-gold">&#10047;</span>
              <span class="text-gold">&#10047;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showPaper = ref(false)

onMounted(() => {
  setTimeout(() => {
    showPaper.value = true
  }, 100)
})
</script>

<style scoped>
@keyframes unfold {
  0% {
    transform: scaleY(0) rotateX(90deg);
    opacity: 0;
  }
  50% {
    transform: scaleY(0.5) rotateX(20deg);
    opacity: 0.8;
  }
  100% {
    transform: scaleY(1) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes reveal {
  0% {
    letter-spacing: 0.5em;
    opacity: 0;
  }
  100% {
    letter-spacing: 0.02em;
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-unfold {
  animation: unfold 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: top center;
}

.animate-reveal {
  animation: reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
