<template>
    <div class="container">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/logo.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/logo.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../assets/logo.png" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <img src="../assets/logo.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <img src="../assets/logo.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.carousel-inner {
  height: 0;
  padding-bottom: 25%;
}

.carousel-item {
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
}

</style>

<script>
export default {
    name: "HomeView",
};
</script>
