<template>
  <section class="skills">
    <SectionTitle numero="01" titulo="Minhas habilidades" />

    <!-- Frontend -->
    <SkillCategory title="Frontend">
      <TechCard name="Vue.js">
        <template #icon>
          <svg viewBox="0 0 128 128" width="50" height="50">
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            />
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            />
          </svg>
        </template>
      </TechCard>

      <TechCard name="Pinia">
        <template #icon>
          <img
            src="../../assets/svg/Pinia--Streamline-Svg-Logos.svg"
            alt=""
            viewBox="0 0 128 128"
            width="50"
            height="50"
          />
        </template>
      </TechCard>

     

      <TechCard name="Axios">
        <template #icon>
          <img
            src="../../assets/svg/Axios--Streamline-Svg-Logos.svg"
            alt=""
            viewBox="0 0 128 128"
            width="50"
            height="50"
          />
        </template>
      </TechCard>
      <TechCard name="React">
        <template #icon>
          <img
            src="../../assets/svg/React--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>
      <TechCard name="Next">
        <template #icon>
          <img
            src="../../assets/svg/Nextjs-Icon--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>
      <TechCard name="HTML5">
        <template #icon>
          <img
            src="../../assets/svg/Html-5--Streamline-Svg-Logos.svg"
            alt=""
            viewBox="0 0 128 128"
            width="150"
            height="100"
          />
        </template>
      </TechCard>

      <TechCard name="CSS3">
        <template #icon>
          <img
            src="../../assets/svg/Css-3--Streamline-Svg-Logos.svg"
            alt=""
            width="150px"
            height="100"
          />
        </template>
      </TechCard>
    </SkillCategory>

    <!-- Backend -->
    <SkillCategory title="Backend">
      <TechCard name="PHP">
        <template #icon>
          <img
            src="../../assets/svg/Php--Streamline-Svg-Logos.svg"
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="Laravel">
        <template #icon>
          <img
            src="../../assets/svg/Laravel--Streamline-Svg-Logos.svg"
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="NestJS">
        <template #icon>
          <img
            src="../../assets/svg/Nestjs--Streamline-Svg-Logos.svg"
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="TypeScript">
        <template #icon>
          <img
            src="../../assets/svg/Typescript-Icon--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="JavaScript">
        <template #icon>
          <img
            src="../../assets/svg/Javascript--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>
    </SkillCategory>

    <!-- Database -->
    <SkillCategory title="Database">
      <TechCard name="MySQL">
        <template #icon>
          <img
            src="../../assets/svg/Mysql--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="PostgreSQL">
        <template #icon>
          <img
            src="../../assets/svg/Postgresql--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>
    </SkillCategory>

    <!-- DevOps -->
    <SkillCategory title="DevOps">
      <TechCard name="Docker">
        <template #icon>
          <img
            src="../../assets/svg/Docker-Icon--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>

      <TechCard name="Git">
        <template #icon>
          <img
            src="../../assets/svg/Git-Icon--Streamline-Svg-Logos.svg"
            alt=""
            width="200"
          />
        </template>
      </TechCard>
    </SkillCategory>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";
import SkillCategory from "@/components/skills/SkillCategory.vue";
import TechCard from "@/components/skills/TechCard.vue";
</script>

<style scoped>
.skills {
  padding: 6rem 0;
}
</style>