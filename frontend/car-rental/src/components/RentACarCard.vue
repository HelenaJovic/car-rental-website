<template>
  <div class="rent-a-car-card">
    <div class="img-div">
      <div class="row-div">
        <img :src="car.imagePath" class="car-img" />
        <h3 class="name">{{ car.name }}</h3>
      </div>
      <div>
        <h4 class="location">Location:📍 {{ car.location }}</h4>
      </div>
    </div>
    <div class="bottom-div">
      <h4 class="grade">Grade⭐: {{ car.grade }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "RentACarCard",
  props: ["car"]
};
</script>
<style scoped>
.rent-a-car-card {
  width: 100%;
  height: 23rem;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 6px rgba(82, 42, 8, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;
  background-color: #f2ede6;
}

.rent-a-car-card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.row-div {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.img-div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.car-img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.bottom-div {
  display: flex;
  justify-content: flex-end;
}

h3 {
  margin: 0;
  font-weight: bold;
}

.name {
  font-size: 1.8rem;
  color: #ba1c07; /* Custom color for the name */
  font-family: "Arial", sans-serif; /* Custom font family for the name */
}

.location {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #565656;
}

.grade {
  margin-top: auto;
  font-size: 1.2rem;
  color: #565656;
}
</style>
