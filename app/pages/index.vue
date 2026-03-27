<template>
  <div class="min-h-screen bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] flex items-center justify-center overflow-hidden relative">
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)" />
    </div>

    <!-- Envelope container -->
    <div
      class="relative cursor-pointer select-none"
      :class="{ 'scale-110': isHovered && !isOpened }"
      style="transition: transform 0.3s ease"
      @click="openEnvelope"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Tap hint -->
      <div
        v-if="!isOpened"
        class="absolute -top-16 left-1/2 -translate-x-1/2 text-gold font-dancing text-xl animate-bounce z-30"
      >
        Tap to open
      </div>

      <!-- Envelope body -->
      <div class="envelope-container" :class="{ opened: isOpened }">
        <!-- Letter/Paper inside -->
        <div class="letter" :class="{ 'letter-rise': isOpened }">
          <div class="p-6 text-center">
            <p class="font-dancing text-gold-dark text-lg mb-2">You are invited</p>
            <div class="w-16 h-px bg-gold mx-auto mb-2" />
            <p class="font-cormorant text-[#3d2b1f] text-sm leading-relaxed">
              To the engagement of<br>
              <span class="font-dancing text-gold text-lg">Elshimi & Fatma</span>
            </p>
            <div class="mt-3">
              <span class="font-dancing text-gold text-2xl">&#10047;</span>
            </div>
          </div>
        </div>

        <!-- Envelope back -->
        <div class="envelope-back" />

        <!-- Envelope flap (top triangle) -->
        <div class="envelope-flap" :class="{ 'flap-open': isOpened }" />

        <!-- Envelope front -->
        <div class="envelope-front">
          <!-- Wax seal -->
          <div class="wax-seal" :class="{ 'seal-break': isOpened }">
            <span class="font-dancing text-cream text-lg font-bold">R</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Redirect overlay -->
    <Transition name="fade">
      <div
        v-if="showOverlay"
        class="fixed inset-0 bg-cream z-50 flex items-center justify-center"
      >
        <div class="text-center animate-pulse">
          <p class="font-playfair text-gold-dark text-3xl mb-2">Opening your invitation...</p>
          <div class="flex justify-center gap-1 mt-4">
            <span v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-gold animate-bounce" :style="{ animationDelay: `${i * 0.2}s` }" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const isOpened = ref(false)
const isHovered = ref(false)
const showOverlay = ref(false)

function particleStyle(i: number) {
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
  }
}

function openEnvelope() {
  if (isOpened.value) return
  isOpened.value = true

  setTimeout(() => {
    showOverlay.value = true
  }, 2000)

  setTimeout(() => {
    router.push('/newspaper')
  }, 3000)
}
</script>

<style scoped>
/* Particles */
.particle {
  position: absolute;
  background: radial-gradient(circle, #c9a84c, transparent);
  border-radius: 50%;
  animation: float linear infinite;
  opacity: 0.4;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
}

/* Envelope */
.envelope-container {
  position: relative;
  width: 320px;
  height: 220px;
}

.envelope-back {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #c9a84c, #a07830);
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.envelope-front {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(180deg, #d4a843, #b8912e);
  clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%);
  border-radius: 0 0 8px 8px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}

.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 130px;
  background: linear-gradient(180deg, #b8912e, #d4a843);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  z-index: 15;
  transform-origin: top center;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.flap-open {
  transform: rotateX(180deg);
  z-index: 5;
}

/* Letter */
.letter {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  height: 180px;
  background: linear-gradient(135deg, #faf6ee, #f4e8d1);
  border-radius: 4px;
  z-index: 8;
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.letter-rise {
  transform: translateY(-160px);
}

/* Wax seal */
.wax-seal {
  width: 48px;
  height: 48px;
  background: radial-gradient(circle at 35% 35%, #d42a2a, #8b0000);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease;
  position: relative;
  z-index: 20;
}

.seal-break {
  opacity: 0;
  transform: scale(0.5) rotate(45deg);
}

/* Overlay transition */
.fade-enter-active { transition: opacity 0.8s ease; }
.fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
