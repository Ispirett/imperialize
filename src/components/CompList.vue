<template lang="html">
    <div class="list">
        <sui-card-group :items-per-row="5" >


            <sui-card>
                <sui-image src="https://resources.tidal.com/images/632ecaef/a635/4bda/9bbf/d3ee320a7c17/320x320.jpg" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="2" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://resources.tidal.com/images/e6ac9c0c/0ebd/433d/a264/ecc3de61ac50/320x320.jpg" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSce7lfowvGrYf1fu3-ThVO7nSErYEKhji_HRCUw9YcIfucPe1k" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSce7lfowvGrYf1fu3-ThVO7nSErYEKhji_HRCUw9YcIfucPe1k" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSce7lfowvGrYf1fu3-ThVO7nSErYEKhji_HRCUw9YcIfucPe1k" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSce7lfowvGrYf1fu3-ThVO7nSErYEKhji_HRCUw9YcIfucPe1k" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
                </sui-card-content>
            </sui-card>
            <sui-card>
                <sui-image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSce7lfowvGrYf1fu3-ThVO7nSErYEKhji_HRCUw9YcIfucPe1k" />
                <sui-card-content extra>
                    Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
                </sui-card-content>
            </sui-card>
        </sui-card-group>
    </div>
</template>

<script>
    export default {
        name: 'Comp',
    };
</script>

<style scoped>
    .list{
        height: 70em;
        overflow: auto;
    }
</style>