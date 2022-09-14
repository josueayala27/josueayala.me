<template>
  <div>
    <jos-table :data="data" :columns="columns">
      <template #status="{ row }">
        <jos-badge>{{ row }}</jos-badge>
      </template>

      <template #customer="{ row }">
        <div class="flex gap-3 min-w-[18rem]">
          <img
            class="w-[3rem] aspect-square rounded-full object-cover"
            :src="row.photo"
            alt="" />
          <div>
            <p>{{ row.name }}</p>
            <p class="text-gray-500">{{ row.mail }}</p>
          </div>
        </div>
      </template>
    </jos-table>
  </div>
</template>

<script>
export default {
  name: 'HelloComponent',
  data() {
    return {
      data: [
        {
          invoice: 'INV-887',
          date: 'Jan 6, 22',
          status: 'Paid',
          customer: {
            photo:
              'https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80',
            name: 'Dagrun Sumati',
            mail: 'sarec91821@oncebar.com',
          },
          purchase: 'Montly',
        },
        {
          invoice: 'INV-750',
          date: 'Jan 5, 22',
          status: 'Refunded',
          customer: {
            photo:
              'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
            name: 'Kareem Ajith',
            mail: 'sarec91821@oncebar.com',
          },
          purchase: 'Weekly',
        },
      ],

      columns: [
        { title: 'Invoice', field: 'invoice', sticky: 'left' },
        { title: 'Date', field: 'date' },
        { title: 'Status', field: 'status' },
        { title: 'Customer', field: 'customer' },
        { title: 'Purchase', field: 'purchase', sticky: 'right' },
      ],
    };
  },
  methods: {
    sendEvent(item) {
      console.log(item);
    },
  },
};
</script>
